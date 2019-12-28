import React from "react";

export default class Home extends React.Component {
  state = {
    newName: "Aditya"
  };
  render() {
    console.log("------ Home -------");
    console.log(this.props);
    return (
      <div>
        <div>Home</div>
        <button onClick={() => this.props.handleNameChild(this.state.newName)}>
          Change Name
        </button>
      </div>
    );
  }
}
