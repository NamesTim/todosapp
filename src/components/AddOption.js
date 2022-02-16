import React from "react";

const AddOption = () => {
  const handleItem = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();

    if (option) {
      alert(option);
    } else {
      alert("please type something");
    }
  };
  return (
    <div>
      <form onSubmit={handleItem}>
        <input type="text" name="option" />
        <button>add-option</button>
      </form>
    </div>
  );
};

export default AddOption;
