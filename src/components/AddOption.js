import React from "react";

const AddOption = () => {
  const handleItem = () => {
    alert("ashley");
  };
  return (
    <div>
      <button onClick={handleItem}>add-option</button>
    </div>
  );
};

export default AddOption;
