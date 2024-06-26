import * as React from "react";
import { useEffect, useState } from "react";

import styles from "@/styles/modules/clinicTime.module.scss";
import { ClinicType, ClinicTypeText } from "@/models/ClinicType.enum";
import { AppService } from "@/utils/app.service";

type ClinicTimeProps = {
  clinicId: string;
};

type ClinicTimeData = {
  clinicId: string;
  clinicPeriod: ClinicPeriod[];
  clinicTime: ClinicTimes[];
};

const DOCTOR_COLORS = ["#006897", "#f68f7b", "#679f99"];

const ClinicTime: React.FC<ClinicTimeProps> = ({ clinicId }) => {
  const [clinicPeriod, setClinicPeriod] = useState<ClinicPeriod[]>([]);
  const [clinicTime, setClinicTime] = useState<ClinicTimes[]>([]);

  const appService = new AppService();

  const getAllClinicTime = async () => {
    return await appService.get<ClinicTimeData>(`ClinicTime/${clinicId}`, null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const clinicTimeData = await getAllClinicTime();
      setClinicPeriod([...clinicTimeData.clinicPeriod]);
      setClinicTime([...clinicTimeData.clinicTime]);
    };
    fetchData();
  }, []);

  return (
    <div className={`table-container container ${styles.clinicTime}`}>
      <div className={styles.clinicTimeTable}>
        <div className={`${styles.tableHeader} fw-bold`}>
          <div className="d-flex">
            <div className={styles.cell}>星期</div>
            <div className={styles.cell}>一</div>
            <div className={styles.cell}>二</div>
            <div className={styles.cell}>三</div>
            <div className={styles.cell}>四</div>
            <div className={styles.cell}>五</div>
            <div className={styles.cell}>六</div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {clinicPeriod &&
            clinicPeriod?.map((period) => (
              <div className="d-flex" key={period?.name}>
                <div className={`${styles.clinicTime} ${styles.cell}`}>
                  <p className="fw-bold mb-2">{period?.name}</p>
                  <p className={styles.time}>{period?.openTime}</p>
                  <p className={`${styles.time} my-1`}>|</p>
                  <p className={styles.time}>{period?.closeTime}</p>
                </div>
                {clinicTime &&
                  clinicTime[period?.index]?.map((clinicDoctorList, idx) =>
                    clinicDoctorList?.length > 0 ? (
                      <div
                        className={`${styles.work} ${styles.cell}`}
                        key={idx}
                      >
                        {clinicDoctorList &&
                          clinicDoctorList?.map((clinicDoctor, j) => (
                            <div
                              key={j}
                              className={
                                j !== clinicDoctorList.length - 1 ? "mb-1" : ""
                              }
                            >
                              <a href={"/doctors"}>
                                <p
                                  className={`${styles.doctorName} mb-1`}
                                  style={{
                                    color: DOCTOR_COLORS[clinicDoctor.doctorId],
                                  }}
                                >
                                  {clinicDoctor?.clinicType !==
                                  ClinicType.OwnExpense
                                    ? clinicDoctor?.doctorName
                                    : ""}
                                  <span className={styles.ownExpense}>
                                    {clinicDoctor?.clinicType ===
                                    ClinicType.OwnExpense
                                      ? `${clinicDoctor?.doctorName}(${
                                          ClinicTypeText[
                                            clinicDoctor?.clinicType
                                          ]
                                        })`
                                      : ""}
                                  </span>
                                </p>
                                <p
                                  className={styles.clinicType}
                                  style={{
                                    color: DOCTOR_COLORS[clinicDoctor.doctorId],
                                  }}
                                >
                                  {clinicDoctor?.clinicType ===
                                  ClinicType.TimeAdjust
                                    ? `（${
                                        ClinicTypeText[clinicDoctor?.clinicType]
                                      }）`
                                    : ""}
                                </p>
                              </a>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div
                        className={`${styles.break} ${styles.cell}`}
                        key={idx}
                      >
                        休診
                      </div>
                    )
                  )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicTime;
