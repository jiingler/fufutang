import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/modules/footer.module.scss";
import { AppService } from "@/utils/app.service";
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
    <footer className={`bg-primary-deep ${styles.footer}`}>
      <div
        className={`container ${styles.topHalf} d-md-flex align-items-center`}
      >
        <div className={`${styles.logo}`}>
          <Image
            src={"/assets/logo/Fufutang-logo-white-line-v.svg"}
            alt={"福福堂logo"}
            width={250}
            height={244}
          />
        </div>
        <div className={`${styles.links} ms-md-3`}>
          <div className={`d-lg-flex justify-content-around`}>
            <div className={`${styles.link} mb-lg-0 mb-3`}>
              <h5 className={`${styles.title}`}>網站連結</h5>
              <ul className={`${styles.list} d-lg-block d-flex flex-wrap`}>
                <li className="py-2">
                  <Link href="/news">最新消息</Link>
                </li>
                <li className="py-2">
                  <Link href="/articles">健康專欄</Link>
                </li>
                <li className="py-2">
                  <Link href="/doctors">醫師介紹</Link>
                </li>
                <li className="py-2">
                  <Link href="/clinics">診所介紹</Link>
                </li>
                <li className="py-2">
                  <Link href="/services">服務項目</Link>
                </li>
                {/* <li className={`py-2">
                  <a>文章分享</a>
                </li> */}
              </ul>
            </div>
            <div className={`${styles.link} mb-lg-0 mb-3`}>
              <h5 className={`${styles.title}`}>聯絡資訊</h5>
              <ul className={`${styles.list}`}>
                <li className="py-2">
                  <p>
                    電話：
                    <a href={`tel:${clinic?.tel}`}>{clinic?.tel}</a>
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    地址：
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
            <div className={`${styles.link} mb-lg-0 mb-3`}>
              <h5 className={`${styles.title}`}>關注我們</h5>
              <div className="d-flex ms-lg-0 ms-3">
                <a
                  href="https://www.facebook.com/fufutangtcm"
                  target="_blank"
                  className="me-3"
                  rel="noreferrer"
                >
                  <Image
                    src={"/assets/logo/fb.webp"}
                    alt="福福堂臉書連結"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href="https://www.instagram.com/fu.fu.tang/"
                  target="_blank"
                  className="me-3"
                  rel="noreferrer"
                >
                  <Image
                    src={"/assets/logo/instagram.webp"}
                    alt="福福堂instagram連結"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=785mxvqt"
                  target="_blank"
                  className="me-3"
                  rel="noreferrer"
                >
                  <Image
                    src={"/assets/logo/line.webp"}
                    alt="福福堂加line好友"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${styles.bottomHalf}`}>
          <p className={`${styles.copyright} text-center`}>
            Copyright © 2023 福福堂 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
