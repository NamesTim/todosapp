import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

class App extends React.Component {
  render() {
    const title = "Todo Application";
    const subtitle = "todos to focus on";
    const options = [
      "visit paris",
      "visit egypt",
      "visit seychelles",
      "visit tunis",
    ];
    return (
      <div>
        <Header titleData={title} subtitleData={subtitle} />
        <Action />
        <Options optionsData={options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
