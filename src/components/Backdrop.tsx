import * as React from "react";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;
