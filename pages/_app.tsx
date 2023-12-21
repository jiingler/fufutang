import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

export const metadata: Metadata = {
  title: "福福堂中醫診所 Fu Fu Tang | 高雄市三民區 | 高雄中醫診所",
  description:
    "福福堂中醫診所是一家位在高雄市三民區的中醫診所。主治項目：感冒、耳鼻喉疾病，急慢性運動傷害、慢性疼痛、落枕、高低肩、骨盆不正，睡眠障礙、失眠、慢性疲勞，經痛、月經不調、更年期症候群，小兒厭食、便秘、腹瀉、胃食道逆流、腸胃炎，呼吸道症候群、過敏性鼻炎、皮膚炎、濕疹，代謝性症候群、三高慢性病。也有設置自費減重、自費減重、體重管理等特別門診。傷科及運動傷害治療是福福堂的招牌，無論肩夾擠、腕隧道症候群、網球肘/高爾夫球肘、髖關節彈響/股骨頭壞死、膝蓋退化、跳躍膝、各部位扭傷、腰部扭挫傷、坐骨神經痛等，都有相當多的治療經驗。柔性的手法及細膩的說明與衛教是我們的特色。我們亦與中山大學及高雄師範大學等體育社團簽署特約，照顧運動員以及為台灣體育付出心力的人員，為台灣體育擔當良好的後援角色。",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>福福堂中醫診所 Fu Fu Tang | 高雄市三民區 | 高雄中醫診所</title>
        <meta
          name="description"
          content="福福堂中醫診所是一家位在高雄市三民區的中醫診所。主治項目：感冒、耳鼻喉疾病，急慢性運動傷害、慢性疼痛、落枕、高低肩、骨盆不正，睡眠障礙、失眠、慢性疲勞，經痛、月經不調、更年期症候群，小兒厭食、便秘、腹瀉、胃食道逆流、腸胃炎，呼吸道症候群、過敏性鼻炎、皮膚炎、濕疹，代謝性症候群、三高慢性病。也有設置自費減重、自費減重、體重管理等特別門診。傷科及運動傷害治療是福福堂的招牌，無論肩夾擠、腕隧道症候群、網球肘/高爾夫球肘、髖關節彈響/股骨頭壞死、膝蓋退化、跳躍膝、各部位扭傷、腰部扭挫傷、坐骨神經痛等，都有相當多的治療經驗。柔性的手法及細膩的說明與衛教是我們的特色。我們亦與中山大學及高雄師範大學等體育社團簽署特約，照顧運動員以及為台灣體育付出心力的人員，為台灣體育擔當良好的後援角色。"
        />
        <meta property="fb:admins" content="fufutangtcm" />
        <meta
          property="og:site_name"
          content="福福堂中醫診所 Fu Fu Tang | 高雄市三民區 | 高雄中醫診所"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fufutang.com.tw/" />
        <meta
          property="og:image"
          content="https://www.fufutang.com.tw/assets/images/fufutang.webp"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta
          property="og:title"
          content="福福堂中醫診所 Fu Fu Tang | 高雄市三民區 | 高雄中醫診所"
        />
        <meta
          property="og:description"
          content="福福堂中醫診所是一家位在高雄市三民區的中醫診所。主治項目：感冒、耳鼻喉疾病，急慢性運動傷害、慢性疼痛、落枕、高低肩、骨盆不正，睡眠障礙、失眠、慢性疲勞，經痛、月經不調、更年期症候群，小兒厭食、便秘、腹瀉、胃食道逆流、腸胃炎，呼吸道症候群、過敏性鼻炎、皮膚炎、濕疹，代謝性症候群、三高慢性病。也有設置自費減重、自費減重、體重管理等特別門診。傷科及運動傷害治療是福福堂的招牌，無論肩夾擠、腕隧道症候群、網球肘/高爾夫球肘、髖關節彈響/股骨頭壞死、膝蓋退化、跳躍膝、各部位扭傷、腰部扭挫傷、坐骨神經痛等，都有相當多的治療經驗。柔性的手法及細膩的說明與衛教是我們的特色。我們亦與中山大學及高雄師範大學等體育社團簽署特約，照顧運動員以及為台灣體育付出心力的人員，為台灣體育擔當良好的後援角色。"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="position-relative">
        <Header />
        <div className="body">
          <Component {...pageProps} />;
        </div>
        <Footer />
      </div>
    </>
  );
}
