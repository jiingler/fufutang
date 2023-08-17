import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClinicType, ClinicTypeText } from "../models/ClinicType.enum";
import { AppService } from "../services/app.service";

type ClinicTimeProps = {
  clinicId: string;
};

type ClinicTimeData = {
  clinicId: string;
  clinicPeriod: ClinicPeriod[];
  clinicTime: ClinicTimes[];
};

const DOCTOR_COLORS = ["#006897", "#f68f7b"];

const ClinicTime: React.FC<ClinicTimeProps> = ({ clinicId }) => {
  const navigate = useNavigate();
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
    <div className="table-container container clinicTime">
      <div className="clinicTimeTable">
        <div className="tableHeader fw-bold">
          <div className="d-flex">
            <div className="cell">星期</div>
            <div className="cell">一</div>
            <div className="cell">二</div>
            <div className="cell">三</div>
            <div className="cell">四</div>
            <div className="cell">五</div>
            <div className="cell">六</div>
          </div>
        </div>
        <div className="tableBody">
          {clinicPeriod &&
            clinicPeriod?.map((period) => (
              <div className="d-flex" key={period?.name}>
                <div className="clinicTime cell">
                  <p className="fw-bold mb-2">{period?.name}</p>
                  <p className="time">{period?.openTime}</p>
                  <p className="time my-1">|</p>
                  <p className="time">{period?.closeTime}</p>
                </div>
                {clinicTime &&
                  clinicTime[period?.index]?.map((clinicDoctorList, idx) =>
                    clinicDoctorList?.length > 0 ? (
                      <div className="work cell" key={idx}>
                        {clinicDoctorList &&
                          clinicDoctorList?.map((clinicDoctor, j) => (
                            <>
                              {clinicDoctor.clinicType !==
                                ClinicType.OwnExpense && (
                                <a key={j} href={"/doctors"}>
                                  <p
                                    className="doctorName mb-2"
                                    style={{
                                      color:
                                        DOCTOR_COLORS[clinicDoctor.doctorId],
                                    }}
                                  >
                                    {clinicDoctor?.doctorName}
                                  </p>
                                  <p className="clinicType">
                                    {clinicDoctor?.clinicType ===
                                    ClinicType.TimeAdjust
                                      ? `（${
                                          ClinicTypeText[ClinicType.TimeAdjust]
                                        }）`
                                      : ""}
                                  </p>
                                </a>
                              )}
                              {clinicDoctor.clinicType ===
                                ClinicType.OwnExpense && (
                                <p className="clinicType ownExpense mb-2">
                                  {ClinicTypeText[ClinicType.OwnExpense]}
                                </p>
                              )}
                            </>
                          ))}
                      </div>
                    ) : (
                      <div className="break cell" key={idx}>
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
