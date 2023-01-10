import React from "react";

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
    <div className="medium-title text-center">
      {/* {isShowLogo && <img className="" src={logo} alt="logo" />} */}
      <p className={`text-${color}`}>{text}</p>
    </div>
  );
};

export default MediumTitle;
