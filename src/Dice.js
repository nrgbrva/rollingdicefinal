import React, { Component } from "react";
class Dice extends Component {
  render() {
    let { num, roll } = this.props;
    function rolled() {
      roll(Math.ceil(Math.random() * 6));
    }
    let arr = ["zero", "one", "two", "three", "four", "five", "six"];
    return (
      <div>
        <i onClick={rolled} className={`fa-solid fa-dice-${arr[num]}`}></i>
      </div>
    );
  }
}
export default Dice;
