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
};

// type ClinicOptional = Partial<Clinic>;
