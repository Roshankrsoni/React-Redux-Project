import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

class App extends React.Component {
  state = {
    name: "Roshan"
  };
  changeName = name => {
    this.setState({
      name: name
    });
  };
  render() {
    return (
      <div>
        <Home handleNameChild={name => this.changeName(name)} />
        <hr />
        <Profile name={this.state.name} />
        <hr />
        <div className="App">Index | Hello {this.state.name}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
