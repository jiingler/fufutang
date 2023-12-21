import { useEffect, useState } from "react";
import News from "./News";
import ClinicTime from "./ClinicTime";
import { AppService } from "@/utils/app.service";

const HomeClinicTime: React.FC<any> = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [currentClinic, setCurrentClinic] = useState<Clinic>();
  const appService = new AppService();

  const getAllClinics = async () => {
    return await appService.get<Clinic[]>("Clinic", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const clinics = await getAllClinics();
      setClinics([...clinics]);

      setCurrentClinic({ ...clinics[0] });
    };
    fetchData();
  }, []);

  return <>{currentClinic && <ClinicTime clinicId={currentClinic.id} />}</>;
};

export default HomeClinicTime;
