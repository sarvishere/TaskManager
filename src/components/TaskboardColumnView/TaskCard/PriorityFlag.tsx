import React from "react";
import Icon from "../../ui/Icon";

interface PriorityFlagProps {
  priority: number;
}

const PriorityFlag: React.FC<PriorityFlagProps> = ({ priority }) => {
  const getPriorityColor = (priority: number): string => {
    if (priority <= 25) {
      return "#B2ACAC";
    } else if (priority <= 50) {
      return "#09DBCE";
    } else if (priority <= 75) {
      return "#FB0606";
    } else {
      return "#FFE605";
    }
  };

  const priorityColor = getPriorityColor(priority);

  return <Icon iconName="Flag" stroke={priorityColor} />;
};

export default PriorityFlag;
