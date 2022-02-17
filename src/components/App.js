import React, { useState } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

const App = () => {
  const [options, setOptions] = useState([]);
  const title = "Todo Application";
  const subtitle = "todos to focus on";

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handleAddOption = (item) => {
    if (!item) {
      return "enter valid value to add item";
    } else if (options.indexOf(item) > -1) {
      return "this option already exists";
    }

    setOptions([...options, item]);
  };

  return (
    <div>
      <Header titleData={title} subtitleData={subtitle} />
      <Action />
      <Options optionsData={options} deleteOptions={handleDeleteOptions} />
      <AddOption addItem={handleAddOption} />
    </div>
  );
};

export default App;
