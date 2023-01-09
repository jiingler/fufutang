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
        <MediumTitle text="門診時間" color="primary" isShowLogo={true} />
        <ClinicTime clinicId={clinic.id} />
      </div>
      <div className="clinic-philosophy bg-primary block">
        <div className="container">
          <MediumTitle text="診所理念" color="white" isShowLogo={true} />
          <p className="description">
            《道德經》：「道生一，一生二，二生三，三生萬物。」宇宙是一個整體，而人體就像是一個小宇宙，應該被視為一個整體。
          </p>
          <p className="description">
            我們的思維有別於西醫或大部分的現代中醫，我們不是見一個症狀就打一個或哪裡有問題就切掉，而是會以整體的最大利益為出發點，在衛教和治療上去思考如何減輕身體負擔、破壞最少，並且讓大家一起練習善待自己的身體、與自己的身體和平共處，進而達到最大的福祉。
          </p>
        </div>
      </div>
      <div className="container block">
        <MediumTitle text="交通資訊" color="primary" isShowLogo={true} />
        <div className="d-md-flex justify-content-around d-block">
          <div className="contacts mb-md-0 mb-3">
            <p className="mb-md-3 mb-2">
              聯絡電話：
              <a href={`tel:${clinic?.tel}`}>{clinic?.tel}</a>
            </p>
            <p className="mb-md-3 mb-2">
              診所地址：
              <a
                href={`https://www.google.com/maps/place/${clinic?.address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {clinic?.address}
              </a>
            </p>
            <p className="mb-md-3 mb-2">大眾交通：</p>
            <p className="mb-md-3 mb-2 ps-3">
              火車 - 台鐵高雄站（走路約10分鐘）、台鐵三塊厝站（走路約6分鐘）
            </p>
            <p className="mb-md-3 mb-2 ps-3">
              公車 -
              遼寧街口(自立路)：28、53B、92自由幹線、301、301區間車、8043、9117、9117A、9127、9188、紅25公車式小黃繞十全路、紅30、紅31
            </p>
            <p className="mb-md-3 mb-2">停車資訊：</p>
            <p className="mb-md-3 mb-2 ps-3">
              宏來商業大樓停車場（九如二路612巷）
            </p>
            <p className="mb-md-3 mb-2 ps-3">
              城市車旅停車場（九如二路637巷29弄）
            </p>
          </div>
          <div className="googleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.296456033378!2d120.29610190000001!3d22.6427329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e045f40f15601%3A0x3f5ee1b6d1e7b9d3!2zODA35Y-w54Gj6auY6ZuE5biC5LiJ5rCR5Y2A6Ieq56uL5LiA6LevMjc56Jmf!5e0!3m2!1szh-TW!2skr!4v1672839191025!5m2!1szh-TW!2skr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
