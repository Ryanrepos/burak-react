// @ts-nocheck
import React, {Component, useEffect, useState} from "react";

class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  export default Test;

export default function Test() {

  const [color, setcolor] = useState<string>(red);  // state
 
  useEffect(() => {
    console.log("componentDidMount");           // componentDidMount
    return() => {
      console.log("componentWillUnmount");      // componentWillUnmount
    }
  }, [value]);                                  // componentDidUpdate , array dependency

  return (
    <div>
      <button>Change the value</button>
    </div>
  )

}