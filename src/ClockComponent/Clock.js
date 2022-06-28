import { Component } from "react";
import Button from "./Button";

class Clock extends Component {
  state = { date: new Date(), Locale: "bn-BD" };
  //  First Execute Render and Second Execute componentDidMount()...
  componentDidMount() {
    this.ClockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ClockTimer);
  }

  handleClick = (Locale) => {
    this.setState({
      Locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, Locale } = this.state;
    // let button;

    // if (Locale === "bn-BD") {
    //   button = ( <Button change={this.handleClick} Locale="en-US" />);
    // } else {
    //   button = (<Button change={this.handleClick} Locale="bn-BD" />);
    // }

    return (
      <div>
        <h1 className="heading">
          <span className="text">Hello {date.toLocaleTimeString(Locale)}</span>
        </h1>
        {Locale === "bn-BD"? (
           <Button change={this.handleClick} Locale="en-US" show = {false} />
           ) : (
             <Button change={this.handleClick} Locale="bn-BD" show />)}
      </div>
    );
  }
}
export default Clock;
