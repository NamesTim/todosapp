import React, { useState } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

const App = () => {
  const [options, setOptions] = useState([
    "visit paris",
    "visit egypt",
    "visit seychelles",
    "visit tunis",
  ]);
  const title = "Todo Application";
  const subtitle = "todos to focus on";

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  return (
    <div>
      <Header titleData={title} subtitleData={subtitle} />
      <Action />
      <Options optionsData={options} deleteOptions={handleDeleteOptions} />
      <AddOption />
    </div>
  );
};

export default App;
