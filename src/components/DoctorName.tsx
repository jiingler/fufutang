const DoctorName: React.FC<{ name: string; position: string }> = ({
  name,
  position,
}) => {
  return (
    <h3 className="doctor-name mb-2">
      {name} <span className="doctor-position">{position}</span>
    </h3>
  );
};

export default DoctorName;
