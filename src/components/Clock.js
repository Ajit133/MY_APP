import { Component } from 'react';

class Clock extends Component{
    state = { date:new Date() };

    componentDidMount(){
        this.ClockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.ClockTimer);
    }
    tick(){
        this.setState({
            date:new Date(),
        });
    }
  render(){
    return(
      <h1 className="heading">
      <span className="text">Hello {new Date().toLocaleTimeString(this.props.cale)}</span>
      
      </h1>
    )
  }
}
export default Clock;