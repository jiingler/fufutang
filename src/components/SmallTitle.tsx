import React from "react";

const SmallTitle: React.FC<{ text: string }> = ({ text }) => {
  return <div className="title-sm mb-md-0 mb-2">{text}</div>;
};

export default SmallTitle;
