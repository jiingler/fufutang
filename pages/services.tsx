import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { AppService } from "@/utils/app.service";
import Service from "@/components/Service";
import styles from "@/styles/modules/servicePage.module.scss";

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);

  const appService = new AppService();

  const getAllServices = async () => {
    return await appService.get<Service[]>("Services", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const services = await getAllServices();
      setServices([...services]);
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <PageTitle text="服務項目" />
      <div className="container">
        <div className={`row g-4 ${styles.doctorExpertise} my-5`}>
          {services &&
            services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
