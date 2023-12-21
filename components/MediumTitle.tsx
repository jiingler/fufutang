import React from "react";
import styles from "@/styles/modules/mediumTitle.module.scss";

type MediumTitleProps = {
  text: string;
  color?: "white" | "primary" | "light" | "deep" | "black";
  isShowLogo?: boolean;
};

const MediumTitle: React.FC<MediumTitleProps> = ({
  text,
  color = "black",
  isShowLogo,
}) => {
  return (
    <div className={`${styles.mediumTitle} text-center`}>
      {/* {isShowLogo && <img className="" src={logo} alt="logo" />} */}
      <p className={`${`text-${color}`}`}>{text}</p>
    </div>
  );
};

export default MediumTitle;
