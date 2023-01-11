type News = {
  id: string; // time stamp
  title: string;
  subTitle?: string;
  category?: NewsCategory; //default 0
  clinics: Clinic[];
  imageUrl?: string;
  paragraphs: string[];
  regDate: string;
  updateDate?: string;
};
