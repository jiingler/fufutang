import Notice from '../components/Notice';
import PageTitle from '../components/PageTitle';

const NewsPage = () => {
  const notices: News[] = [
    {
      id: '001',
      title: '福福堂慶開幕活動',
      subTitle: '活動期間02/01 ~ 02/28',
      clinicId: 'fufu',
      imageUrl: '',
      content: '',
      regDate: '2022-12-24'
    },
    {
      id: '002',
      title: '掛號須知',
      clinicId: 'fufu',
      imageUrl: '',
      content: '',
      regDate: '2022-12-24'
    },
    {
      id: '003',
      title: '自費門診掛號',
      clinicId: 'fufu',
      imageUrl: '',
      content: '',
      regDate: '2022-12-24'
    }
  ];

  return (
    <div className="page">
      <PageTitle text="最新消息" />
      <div className="container my-5">
        <div className="">
          {notices.map((notice) => (
            <Notice notice={notice} key={notice.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
