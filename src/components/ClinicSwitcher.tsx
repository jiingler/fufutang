import * as React from 'react';
import { useState } from 'react';
import Backdrop from './Backdrop';
import logo from '../assets/logo/Fufutang-logo-pink-line-only-logo.svg';

type ClinicSwitcherProps = {
  clinics: Clinic[];
  currentClinic: Clinic | undefined;
  setCurrentClinic: React.Dispatch<React.SetStateAction<Clinic | undefined>>;
  isPhoneModeSelect?: boolean;
};

const ClinicSwitcher: React.FC<ClinicSwitcherProps> = ({
  clinics,
  currentClinic,
  setCurrentClinic,
  isPhoneModeSelect
}) => {
  const [selectedClinic, setSelectedClinic] = useState(clinics[0]);
  const [isExpandOptions, setIsExpandOptions] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-center">
        {clinics.map((clinic) => {
          const isActive = currentClinic?.id === clinic?.id;
          return (
            <div
              className={`clinicSwitcher my-md-5 my-4 ${isActive ? 'active' : ''} ${
                isPhoneModeSelect ? 'd-md-block d-none' : 'd-flex align-items-center flex-wrap'
              }`}
              key={clinic.id}
              onClick={() => setCurrentClinic(clinic)}>
              <img className="logo me-3" src={logo} alt="logo" />
              {clinic.name}
            </div>
          );
        })}
      </div>
      {/* 下拉式選單 限手機版 */}
      {isPhoneModeSelect && (
        <div className="w-100 d-md-none mx-3">
          <div
            className="clinicSwitcher selected"
            onClick={() => setIsExpandOptions(!isExpandOptions)}>
            <p>{selectedClinic.name}</p>
            {clinics.length > 1 && <span className="material-icons">expand_more</span>}
          </div>
          {isExpandOptions && (
            <>
              <div className="options">
                {clinics?.length > 1 &&
                  clinics.map((clinic) => (
                    <div
                      className="option"
                      key={clinic.id}
                      onClick={() => {
                        setSelectedClinic(clinic);
                        setCurrentClinic(clinic);
                        setIsExpandOptions(false);
                      }}>
                      {clinic.name}
                    </div>
                  ))}
              </div>
              <Backdrop onClick={() => setIsExpandOptions(false)} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ClinicSwitcher;
