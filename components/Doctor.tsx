import * as React from "react";
import Button from "./Button";
import MediumTitle from "./MediumTitle";
import DoctorName from "./DoctorName";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/modules/doctor.module.scss";

const Doctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const router = useRouter();
  return (
    <div className={styles.doctor}>
      <div className="container block pb-0">
        <div className="d-md-flex justify-content-center align-items-center d-block mb-md-0 mb-4">
          <div className={`${styles.profileImage} mb-md-0 mb-3`}>
            <Image
              src={doctor?.image}
              alt={doctor?.name + " 醫師形象照"}
              width={470}
              height={500}
            />
          </div>
          <div className="d-md-block d-flex flex-row-reverse justify-content-between align-items-end mx-md-0 mx-3">
            <div className={`${styles.clinic} d-flex mb-2`}>
              {doctor?.clinics?.map((clinic, idx) => (
                <p key={idx}>{clinic.name}</p>
              ))}
            </div>
            <DoctorName
              name={doctor?.name}
              position={doctor?.position}
            ></DoctorName>
          </div>
        </div>
      </div>
      <div className={`${styles.doctorInfo} block`}>
        <div className="container">
          <div className="d-md-flex justify-content-center d-block mx-md-0 mx-3">
            <div className={styles.info}>
              <h4 className={styles.class}>學經歷</h4>
              <ul className={styles.list}>
                {doctor?.experiences?.map((experience, idx) => (
                  <li className={styles.item} key={idx}>
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.info}>
              <h4 className={styles.class}>主治項目</h4>
              <ul className={styles.list}>
                {doctor?.expertises?.map((expertise, idx) => (
                  <li className={`${styles.item} mb-2`} key={idx}>
                    <h5 className="mb-1">{expertise.type}</h5>
                    {expertise?.content && <p>{expertise.content}</p>}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.info}>
              <h4 className={styles.class}>特別門診（需預約）</h4>
              <ul className={styles.list}>
                {doctor?.specialExpertises?.map((specialExpertise, idx) => (
                  <li className={`${styles.item} mb-2`} key={idx}>
                    <h5 className="mb-1">{specialExpertise.type}</h5>
                    {specialExpertise?.content && (
                      <p>{specialExpertise.content}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container block">
        <div className={styles.doctorExpertise}>
          <MediumTitle text="醫師專長" isShowLogo={true} />
          <div className="container">
            <div className="row g-3">
              {doctor?.majorServices?.map((service, index) => (
                <div className="col-md-4 col-12" key={index}>
                  <div className={`${styles.expertise} bg-wood`}>
                    <h4 className={styles.title}>{service?.title}</h4>
                    <p className={styles.description}>{service?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <Button
              type="primary"
              text="更多服務介紹"
              isOutlined={false}
              callback={() => router.push("/services")}
              iconName="arrow_circle_right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
