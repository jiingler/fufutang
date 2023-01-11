import * as React from "react";
import MediumTitle from "./MediumTitle";

const Doctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="doctor">
      <div className="container block pb-0">
        <div className="d-md-flex justify-content-center align-items-center d-block">
          <div className="d-md-block d-flex flex-row-reverse justify-content-between align-items-end mx-md-0 mx-3">
            <div className="clinic d-flex mb-2">
              {doctor?.clinics?.map((clinic, idx) => (
                <p key={idx}>{clinic.name}</p>
              ))}
            </div>
            <h3 className="doctor-name mb-2">
              {doctor?.name}{" "}
              <span className="doctor-position">{doctor?.position}</span>
            </h3>
          </div>
          <div className="profile-image">
            <img src={doctor?.image} alt="醫師形象照" />
          </div>
        </div>
      </div>
      <div className="doctor-info block">
        <div className="container">
          <div className="d-md-flex justify-content-center d-block mx-md-0 mx-3">
            <div className="info">
              <h5 className="class">學經歷</h5>
              <ul className="list">
                {doctor?.experiences?.map((experience, idx) => (
                  <li className="item" key={idx}>
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <h5 className="class">主治項目</h5>
              <ul className="list">
                {doctor?.expertises?.map((expertise, idx) => (
                  <li className="item" key={idx}>
                    {expertise}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <h5 className="class">特別專長</h5>
              <ul className="list">
                {doctor?.specialExpertises?.map((specialExpertise, idx) => (
                  <li className="item" key={idx}>
                    {specialExpertise}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container block">
        <div className="doctor-expertise">
          <MediumTitle text="醫師專長" isShowLogo={true} />
          <div className="container">
            <div className="row g-3">
              {doctor?.majorServices?.map((service, index) => (
                <div className="col-md-4 col-12" key={index}>
                  <div className="expertise bg-wood">
                    <h4 className="title">{service?.title}</h4>
                    <p className="description">{service?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
