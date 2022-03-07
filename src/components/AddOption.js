import React, { useState } from "react";

const AddOption = (props) => {
  const [error, setError] = useState(null);
  const handleItem = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const errorData = props.addItem(option);
    setError(errorData);
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleItem}>
        <input type="text" name="option" />
        <button >add-option</button>
      </form>
    </div>
  );
};

export default AddOption;
