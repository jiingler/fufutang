import * as React from "react";
import ClinicTime from "./ClinicTime";
import MediumTitle from "./MediumTitle";
import styles from "@/styles/modules/clinic.module.scss";

type ClinicProps = {
  clinic: Clinic;
};

const Clinic: React.FC<ClinicProps> = ({ clinic }) => {
  return (
    <div className={styles.clinic}>
      <div className="container block">
        <MediumTitle text="門診時間" isShowLogo={true} />
        <ClinicTime clinicId={clinic.id} />
        {/* <p className="mt-1" style={{ textAlign: "center" }}>
          （自2024/06/01起適用此門診時間）
        </p> */}
      </div>
      {!!clinic?.philosophy && clinic.philosophy.length > 0 && (
        <div className={`bg-wood block`}>
          <div className="container">
            <MediumTitle text="診所理念" isShowLogo={true} />
            {clinic.philosophy.map((paragraph, idx) => (
              <p className={styles.description} key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="container block">
        <MediumTitle text="交通資訊" isShowLogo={true} />
        <div className="d-md-flex justify-content-around d-block">
          <div className={`${styles.contacts} mb-md-0 mb-3`}>
            <p className="mb-md-3 mb-2">
              聯絡電話：
              <a className="fw-300" href={`tel:${clinic?.tel}`}>
                {clinic?.tel}
              </a>
            </p>
            <p className="mb-md-3 mb-2">
              診所地址：
              <a
                className="fw-300"
                href={`https://www.google.com/maps/place/${clinic?.address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {clinic?.address}
              </a>
            </p>
            {clinic?.transportation && (
              <>
                <p className="mb-md-3 mb-2">大眾交通：</p>
                <p className="mb-md-3 mb-2 ps-3">
                  火車 -
                  <span className="fw-300">
                    {" "}
                    {clinic.transportation?.train}
                  </span>
                </p>
                <p className="mb-md-3 mb-2 ps-3">
                  公車 -
                  <span className="fw-300"> {clinic.transportation?.bus}</span>
                </p>
              </>
            )}
            {!!clinic?.parkingLots && clinic?.parkingLots?.length > 0 && (
              <>
                <p className="mb-md-3 mb-2">停車資訊：</p>
                {clinic.parkingLots.map((parkingLot, idx) => (
                  <p className="mb-md-3 mb-2 ps-3 fw-300" key={idx}>
                    {parkingLot}
                  </p>
                ))}
              </>
            )}
          </div>
          {clinic?.googleMapFrame && (
            <div className={styles.googleMap}>
              <iframe
                src={clinic?.googleMapFrame}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clinic;
