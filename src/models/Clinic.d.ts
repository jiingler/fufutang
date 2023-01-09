type Clinic = {
  id: string;
  isHome?: boolean;
  name: string;
  address?: string;
  tel?: string;
  images?: Image[];
  clinicPeriod?: ClinicPeriod[];
  clinicTime?: ClinicTimes[];
};

// type ClinicOptional = Partial<Clinic>;
