import * as React from "react";

type ButtonProps = {
  isOutlined: boolean;
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  text: string;
  iconName?: string;
  callback: () => void;
};

const Button: React.FC<ButtonProps> = ({
  isOutlined,
  type,
  callback,
  text,
  iconName,
}) => {
  return (
    <button
      className={`btn-${type} ${isOutlined ? "outlined" : ""}`}
      onClick={callback}
    >
      {iconName && <span className="material-icons">{iconName}</span>}
      {text}
    </button>
  );
};

export default Button;
