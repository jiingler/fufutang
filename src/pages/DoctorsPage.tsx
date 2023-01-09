import * as React from 'react';
import { useEffect, useState } from 'react';
import ClinicSwitcher from '../components/ClinicSwitcher';
import Doctor from '../components/Doctor';
import PageTitle from '../components/PageTitle';
import { AppService } from '../services/app.service';

const DoctorsPage: React.FC<{}> = () => {
  // const [currentClinic, setCurrentClinic] = useState<Clinic>();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  // const [clinics, setClinics] = useState<Clinic[]>([]);

  const appService = new AppService();

  // const getAllClinics = async () => {
  //   return await appService.get<Clinic[]>('Clinic', null);
  // };

  const getAllDoctors = async () => {
    return await appService.get<Doctor[]>('Doctor', null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const doctors = await getAllDoctors();
      setDoctors([...doctors]);
      // const clinics = await getAllClinics();
      // setClinics([...clinics]);
      // setCurrentClinic(clinics[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <PageTitle text="醫師介紹" />
      {/* <div className="container">
        {clinics && clinics.length > 1 && (
          <div className="d-flex justify-content-md-center justify-content-start my-5 text-center">
            <ClinicSwitcher
              currentClinic={currentClinic}
              setCurrentClinic={setCurrentClinic}
              clinics={clinics}
              isPhoneModeSelect={true}
            />
          </div>
        )}
      </div> */}
      {doctors && doctors.map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
    </div>
  );
};

export default DoctorsPage;
