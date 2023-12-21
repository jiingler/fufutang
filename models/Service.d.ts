type Service = {
  id: number;
  title: string;
  description: string[];
  indications?: string[];
  applicables?: string[];
  processes?: string[];
  [property: string]: string[];
};
