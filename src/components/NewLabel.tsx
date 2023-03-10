import * as React from "react";

type NewLabelProps = {
  dateString: string;
};

const NewLabel: React.FC<NewLabelProps> = ({ dateString }) => {
  const today = new Date();
  const date = new Date(dateString);
  const weekValue = 7 * 24 * 60 * 60 * 1000;

  if (today.valueOf() - date.valueOf() <= weekValue) {
    return <span className="newLabel">new</span>;
  } else {
    return null;
  }
};

export default NewLabel;
