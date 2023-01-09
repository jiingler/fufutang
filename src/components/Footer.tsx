import logoWhiteV from "../assets/logo/Fufutang-logo-white-line-v.svg";
import { Link } from "react-router-dom";
import facebook from "../assets/logo/fb.png";
import instagram from "../assets/logo/instagram.png";
import line from "../assets/logo/line.png";
import { useEffect, useState } from "react";
import { AppService } from "../services/app.service";

const Footer = () => {
  const [clinic, setClinic] = useState<Clinic>();

  const appService = new AppService();

  const getHomeClinic = async () => {
    return await appService.get<Clinic[]>("Clinic", null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const clinics = await getHomeClinic();
      const home = clinics.find((clinic) => clinic.isHome);
      setClinic(home);
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-secondary footer">
      <div className="container top-half d-md-flex align-items-center">
        <div className="logo">
          <img src={logoWhiteV} alt="logo" />
        </div>
        <div className="links ms-md-3">
          <div className="d-md-flex justify-content-around">
            <div className="link mb-md-0 mb-3">
              <h5 className="title">網站連結</h5>
              <ul className="list">
                <li className="py-2">
                  <Link to="/news">最新消息</Link>
                </li>
                <li className="py-2">
                  <Link to="/doctors">醫師介紹</Link>
                </li>
                <li className="py-2">
                  <Link to="/clinics">診所介紹</Link>
                </li>
                <li className="py-2">
                  <a>服務項目</a>
                </li>
                <li className="py-2">
                  <a>文章分享</a>
                </li>
              </ul>
            </div>
            <div className="link mb-md-0 mb-3">
              <h5 className="title">聯絡資訊</h5>
              <ul className="list">
                <li className="py-2">
                  <p>
                    代表電話：
                    <a href={`tel:${clinic?.tel}`}>{clinic?.tel}</a>
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    代表地址：
                    <a
                      href="https://www.google.com/maps/place/807%E5%8F%B0%E7%81%A3%E9%AB%98%E9%9B%84%E5%B8%82%E4%B8%89%E6%B0%91%E5%8D%80%E8%87%AA%E7%AB%8B%E4%B8%80%E8%B7%AF279%E8%99%9F/@22.6426104,120.2961683,20.08z/data=!4m5!3m4!1s0x346e045f40f15601:0x3f5ee1b6d1e7b9d3!8m2!3d22.6427329!4d120.2961019?hl=zh-TW"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {clinic?.address}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="link mb-md-0 mb-3">
              <h5 className="title">關注我們</h5>
              <div className="d-flex">
                <a href="" className="me-3">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="" className="me-3">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="" className="me-3">
                  <img src={line} alt="line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-half">
          <p className="copyright text-center">
            Copyright © 2023 福福堂 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
