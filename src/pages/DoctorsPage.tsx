import * as React from "react";
import { useEffect, useState } from "react";
import ClinicSwitcher from "../components/ClinicSwitcher";
import Doctor from "../components/Doctor";
import PageTitle from "../components/PageTitle";
import { AppService } from "../services/app.service";
import DoctorList from "../components/DoctorList";
import DoctorName from "../components/DoctorName";

const DoctorsPage: React.FC<{}> = () => {
  // const [currentClinic, setCurrentClinic] = useState<Clinic>();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentDoctor, setCurrectDoctor] = useState<Doctor>();
  // const [clinics, setClinics] = useState<Clinic[]>([]);

  const appService = new AppService();

  // const getAllClinics = async () => {
  //   return await appService.get<Clinic[]>("Clinic", null);
  // };

  const getAllDoctors = async () => {
    return await appService.get<Doctor[]>("Doctor", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const doctors = await getAllDoctors();
      setDoctors([...doctors]);
      setCurrectDoctor(doctors[0]);
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
      <div className="doctor-list">
        {currentDoctor &&
          doctors &&
          doctors.map((doctor) => {
            return (
              <button
                className={`text-button doctor ${
                  currentDoctor.id === doctor.id ? "active" : ""
                }`}
                onClick={() => setCurrectDoctor(doctor)}
                key={doctor.id}
              >
                <DoctorName
                  name={doctor?.name}
                  position={doctor?.position}
                ></DoctorName>
              </button>
            );
          })}
      </div>
      {currentDoctor && (
        <Doctor key={currentDoctor.id} doctor={currentDoctor} />
      )}
    </div>
  );
};

export default DoctorsPage;
