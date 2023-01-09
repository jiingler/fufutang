import React from "react";

const SectionTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h3 className="sectionTitle">
      <span className="">{text}</span>
    </h3>
  );
};

export default SectionTitle;
