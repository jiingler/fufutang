import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { AppService } from "@/utils/app.service";
import ClinicSwitcher from "@/components/ClinicSwitcher";
import Clinic from "@/components/Clinic";

const ClinicsPage = () => {
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

  return (
    <div className="page">
      <PageTitle text="診所介紹" />
      {clinics.length > 1 && (
        <ClinicSwitcher
          currentClinic={currentClinic}
          setCurrentClinic={setCurrentClinic}
          clinics={clinics}
        />
      )}
      {currentClinic && <Clinic clinic={currentClinic} />}
    </div>
  );
};

export default ClinicsPage;
