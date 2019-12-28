import React from "react";

export default class Profile extends React.Component {
  render() {
    console.log("------- Profile -------");
    console.log(this.props);
    return <div>Profile | Hello {this.props.name}</div>;
  }
}
