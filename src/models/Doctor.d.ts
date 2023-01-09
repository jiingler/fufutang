type Doctor = {
  id: number;
  name: string;
  clinics: Clinic[];
  position: string; // 職位: 院長、醫師...
  experiences: string[]; //學經歷
  expertises: string[]; // 專長
  specialExpertises: string[]; //特殊專長
  majorServices: { title: string; description: string }[];
  image: string;
};
