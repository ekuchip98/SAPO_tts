import React, { Component } from "react";

class Selection1 extends Component {
  render() {

    return (
      <select className="sl-limit" id="sl-limit" onChange={this.props.onChangeSelect}>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>
    );
  }
}

export default Selection1;
