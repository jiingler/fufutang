import Image from "next/image";

import styles from "../styles/modules/Home.module.scss";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import HomeClinicTime from "../components/HomeClinicTime";
import HomeNews from "../components/HomeNews";
import MediumTitle from "../components/MediumTitle";

export default function Home() {
  const router = useRouter();
  const services = [
    { name: "經方中醫", imageUrl: "/assets/images/cm.webp" },
    { name: "古典針灸", imageUrl: "/assets/images/acupuncture.webp" },
    { name: "整體結構調理", imageUrl: "/assets/images/massage.webp" },
    { name: "運動醫學", imageUrl: "/assets/images/exercise.webp" },
    // { name: "靈氣療癒", imageUrl: meditation },
  ];
  return (
    <>
      <div className={styles.homeBg}>
        <div className={`container , ${styles.homeBgInfo}`}>
          <h2 className={`${styles.homeTitle} mb-2`}>歡迎來到福福堂中醫診所</h2>
          <p className={`${styles.homeSubtitle} mb-4`}>
            以整體宏觀的視野看待人體，並重視醫病雙方協力合作
          </p>
          <Button
            type="primary"
            text="查看門診時間"
            isOutlined={false}
            callback={() => router.push("/clinics")}
            iconName="arrow_circle_right"
          />
        </div>
        <div className={styles.overlay}></div>
      </div>

      <div className="container block">
        <MediumTitle text="最新消息" isShowLogo={true} />
        <div className="px-2">
          <HomeNews />
        </div>
        <div className="text-center mt-4">
          <Button
            type="primary"
            text="更多最新消息"
            isOutlined={false}
            callback={() => router.push("/news")}
            iconName="arrow_circle_right"
          />
        </div>
      </div>

      <div className={`${styles.services} block bg-wood`}>
        <MediumTitle text="服務項目" isShowLogo={true} />
        <div className="container d-md-flex flex-lg-wrap justify-content-between d-block">
          {services.map((service, index) => (
            <div
              className={`${styles.service}  py-md-4 pt-0 pb-2 px-md-3 px-0`}
              key={index}
            >
              <div className={`${styles.imageContainer} position-relative`}>
                <Image
                  src={service.imageUrl}
                  alt={"福福堂服務項目：" + service.name}
                  width={800}
                  height={800}
                  sizes="(max-width: 100%)"
                  priority={true}
                  unoptimized
                />
                <div
                  className={`${styles.imageOverlay} position-absolute`}
                ></div>
                <p className={`${styles.imageText} position-absolute`}>
                  {service.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button
            type="primary"
            text="更多服務項目"
            isOutlined={true}
            callback={() => router.push("/services")}
            iconName="arrow_circle_right"
          />
        </div>
      </div>

      <div className="container block">
        <MediumTitle text="門診時間" isShowLogo={true} />
        <HomeClinicTime />
        <p className="mt-1" style={{ textAlign: "center" }}>
          （自2024/06/01起適用此門診時間）
        </p>
      </div>
    </>
  );
}
