import * as React from "react";
import styles from "@/styles/modules/button.module.scss";

type ButtonProps = {
  isOutlined: boolean;
  type: "primary" | "light" | "deep" | "wood";
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
      className={`${styles["btn_" + type]} ${
        isOutlined ? styles.outlined : ""
      }`}
      onClick={callback}
    >
      {iconName && (
        <span className={`${styles.icon} material-icons`}>{iconName}</span>
      )}
      {text}
    </button>
  );
};

export default Button;
