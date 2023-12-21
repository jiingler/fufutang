type Clinic = {
  id: string;
  isHome?: boolean;
  name: string;
  address?: string;
  tel?: string;
  images?: Image[];
  clinicPeriod?: ClinicPeriod[];
  clinicTime?: ClinicTimes[];
  transportation?: Transportation
  parkingLots?: string[];
  googleMapFrame?: string;
  philosophy?: string[];
};

// type ClinicOptional = Partial<Clinic>;
