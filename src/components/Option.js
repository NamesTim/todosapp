import React from "react";

class Option extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.optionText}</div>
      </div>
    );
  }
}

export default Option;
