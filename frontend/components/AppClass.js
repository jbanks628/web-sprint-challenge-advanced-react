import axios from "axios";
import React from "react";

export default class AppClass extends React.Component {
  state = {
    form: [
      {
        x: 2,
        y: 2,
        steps: 0,
      },
    ],
    email: "",
    error: "",
  };
  OnChange = (e) => {
    const { value, steps } = e.target;
    console.log(value, steps);
    this.setState({
      ...this.state,
      [steps]: value,
    });
  };
  OnSubmit = (e) => {
    e.preventDefault();
    const payLoad = { email: this.state.email };
    axios.post("http://localhost:9000/api/result", payLoad).then((res) => {
      this.setState({
        ...this.state,
        form: res.data.email,
      });
    });
  };
  handleReset = () => {
    this.setState({
      ...this.state,
      form: [
        {
          x: 2,
          y: 2,
          steps: 0,
        },
      ],
      email: "",
      error: "",
    }).catch((err) => {
      const apiErr = err.response.data.message;
      this.setState({
        ...this.state,
        error: apiErr,
      });
    });
  };
  render() {
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.email}
            id="email"
            type="email"
            placeholder="type email"
          />

          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}
