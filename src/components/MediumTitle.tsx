import React from "react";
import logo from "../assets/logo/Fufutang-logo-pink-line-only-logo.svg";

type MediumTitleProps = {
  text: string;
  color: "white" | "primary" | "secondary" | "tertiary" | "quaternary";
  isShowLogo?: boolean;
};

const MediumTitle: React.FC<MediumTitleProps> = ({
  text,
  color,
  isShowLogo,
}) => {
  return (
    <div className="medium-title text-center">
      {/* {isShowLogo && <img className="" src={logo} alt="logo" />} */}
      <p className={`text-${color}`}>{text}</p>
    </div>
  );
};

export default MediumTitle;
