import styles from "@/styles/modules/doctorName.module.scss";

const DoctorName: React.FC<{ name: string; position: string }> = ({
  name,
  position,
}) => {
  return (
    <h3 className={`${styles.doctorName}`}>
      {name} <span className={styles.doctorPosition}>{position}</span>
    </h3>
  );
};

export default DoctorName;
