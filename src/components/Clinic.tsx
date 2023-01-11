import * as React from "react";
import ClinicTime from "./ClinicTime";
import MediumTitle from "./MediumTitle";

type ClinicProps = {
  clinic: Clinic;
};

const Clinic: React.FC<ClinicProps> = ({ clinic }) => {
  return (
    <div className="clinic">
      <div className="container block">
        <MediumTitle text="門診時間" isShowLogo={true} />
        <ClinicTime clinicId={clinic.id} />
      </div>
      <div className="clinic-philosophy bg-wood block">
        <div className="container">
          <MediumTitle text="診所理念" isShowLogo={true} />
          <p className="description">
            《道德經》：「道生一，一生二，二生三，三生萬物。」宇宙是一個整體，而人體就像是一個小宇宙，應該被視為一個整體。
          </p>
          <p className="description">
            我們的思維有別於西醫或大部分的現代中醫，我們不是見一個症狀就打一個或哪裡有問題就切掉，而是會以整體的最大利益為出發點，在衛教和治療上去思考如何減輕身體負擔、破壞最少，並且讓大家一起練習善待自己的身體、與自己的身體和平共處，進而達到最大的福祉。
          </p>
        </div>
      </div>
      <div className="container block">
        <MediumTitle text="交通資訊" isShowLogo={true} />
        <div className="d-md-flex justify-content-around d-block">
          <div className="contacts mb-md-0 mb-3">
            <p className="mb-md-3 mb-2">
              聯絡電話：
              <a className="fw-lighter" href={`tel:${clinic?.tel}`}>{clinic?.tel}</a>
            </p>
            <p className="mb-md-3 mb-2">
              診所地址：
              <a
                className="fw-lighter"
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
                  <span className="fw-lighter"> {clinic.transportation?.train}</span>
                </p>
                <p className="mb-md-3 mb-2 ps-3">
                  公車 -
                  <span className="fw-lighter"> {clinic.transportation?.bus}</span>
                </p>
              </>
            )}
            {!!clinic?.parkingLots && clinic?.parkingLots?.length > 0 && (
              <>
                <p className="mb-md-3 mb-2">停車資訊：</p>
                {clinic.parkingLots.map(parkingLot => (
                  <p className="mb-md-3 mb-2 ps-3 fw-lighter">
                    {parkingLot}
                  </p>
                ))}
              </>
            )}
          </div>
          {clinic?.googleMapFrame && (
            <div className="googleMap">
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
