import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import chineseMedicine from "../assets/images/chinese-medicine.jpg";
import message from "../assets/images/massage.jpeg";
import acupuncture from "../assets/images/acupuncture.jpg";
import exercise from "../assets/images/exercise.jpg";
import meditation from "../assets/images/meditation.jpg";
import MediumTitle from "../components/MediumTitle";
import Notice from "../components/Notice";
import ClinicTime from "../components/ClinicTime";
import { useEffect, useState } from "react";
import { AppService } from "../services/app.service";

const HomePage = () => {
  const navigate = useNavigate();
  const services = [
    { name: "經方中醫", imageUrl: chineseMedicine },
    { name: "古典針灸", imageUrl: acupuncture },
    { name: "整體結構調理", imageUrl: message },
    { name: "運動醫學", imageUrl: exercise },
    { name: "靈氣療癒", imageUrl: meditation },
  ];

  const notices: News[] = [
    {
      id: "001",
      title: "福福堂慶開幕活動",
      clinicId: "fufu",
      imageUrl: "",
      content: "",
      regDate: "2022-12-24",
    },
    {
      id: "002",
      title: "掛號須知",
      clinicId: "fufu",
      imageUrl: "",
      content: "",
      regDate: "2022-12-24",
    },
    {
      id: "003",
      title: "自費門診掛號",
      clinicId: "fufu",
      imageUrl: "",
      content: "",
      regDate: "2022-12-24",
    },
  ];

  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [currentClinic, setCurrentClinic] = useState<Clinic>();
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const appService = new AppService();

  const getAllClinics = async () => {
    return await appService.get<Clinic[]>("Clinic", null);
  };

  const getAllDoctors = async () => {
    return await appService.get<Doctor[]>("Doctor", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const doctors = await getAllDoctors();
      setDoctors([...doctors]);
      const clinics = await getAllClinics();
      setClinics([...clinics]);
      setCurrentClinic({ ...clinics[0] });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="home-bg">
        <div className="container home-bg-info">
          <h2 className="home-title mb-2">歡迎來到福福堂中醫</h2>
          <p className="home-subtitle mb-4">
            以整體宏觀的視野看待人體，並重視醫病雙方協力合作
          </p>
          <Button
            type="primary"
            text="查看門診時間＆預約"
            isOutlined={false}
            callback={() => navigate("/clinics")}
            iconName="arrow_circle_right"
          />
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container block">
        <MediumTitle text="最新消息" color="primary" isShowLogo={true} />
        <div className="px-2">
          {notices.map((notice) => (
            <Notice notice={notice} key={notice.id} />
          ))}
        </div>
        <div className="text-center mt-md-3 mt-2">
          <Button
            type="primary"
            text="更多最新消息"
            isOutlined={false}
            callback={() => navigate("/news")}
            iconName="arrow_circle_right"
          />
        </div>
      </div>

      <div className="services block">
        <MediumTitle text="服務介紹" color="white" isShowLogo={true} />
        <div className="container d-md-flex justify-content-between d-block">
          {services.map((service, index) => (
            <div className="service py-md-4 py-3 px-md-3 px-0" key={index}>
              <div className="imageContainer position-relative">
                <img src={service.imageUrl} alt={service.name} />
                <div className="imageOverlay position-absolute"></div>
                <p className="imageText position-absolute">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container block">
        <MediumTitle text="門診時間" color="primary" isShowLogo={true} />
        {currentClinic && <ClinicTime clinicId={currentClinic.id} />}
      </div>
    </>
  );
};

export default HomePage;
