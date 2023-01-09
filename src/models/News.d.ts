type News = {
  id: string; // time stamp
  title: string;
  subTitle?: string;
  category?: NewsCategory; //default 0
  clinicId: string;
  imageUrl?: string;
  content: string;
  regDate: string;
  updateDate?: string;
};
