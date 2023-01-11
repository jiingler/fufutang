import { useParams } from 'react-router-dom';


const NewsDetailPage = () => {
  const newsId = useParams();

  const news = {
    id: "001",
    title: "福福堂慶開幕活動",
    subTitle: "活動期間02/01 ~ 02/28",
    clinics: [{ id: "fufu", name: "福福堂" }],
    imageUrl: "https://www.huish.ac.uk/wp-content/uploads/2022/06/Open-Event.jpg",
    paragraphs: ["賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。賀開幕!於開幕期間至福福堂中醫診所看診，即可獲得XXX乙個。", "活動日期: 112年2月5日 ~ 112年2月28日"],
    regDate: "2022-12-24",
  }
  return (
    <div className="page py-5">
      <div className="container newsDetail">
        {/* {!!news?.clinics && news?.clinics.length > 0 && (
          <div className="d-flex">
            {news.clinics.map((clinic, idx) => (
              <p key={idx}>{clinic?.name}</p>
            ))}
          </div>
        )} */}
        <div className="titleField d-md-flex justify-content-between align-items-end d-block">
          <h3 className="title">{news.title}</h3>
          <p className="regDate">公告日期：{news.regDate}</p>
        </div>
        <div className="content p-md-5 p-3">
          {news?.imageUrl && (
            <div className='image-container'>
              <img src={news.imageUrl} alt={news.title} />
            </div>
          )}
          <div className="paragraphs mt-md-5 mt-3">
            {!!news?.paragraphs && news.paragraphs.length > 0 && (
              <>
                {news.paragraphs.map((paragraph, idx) => (
                  <p className="paragraph mb-2" key={idx}>{paragraph}</p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetailPage;