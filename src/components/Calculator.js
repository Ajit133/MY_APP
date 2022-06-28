import React, { Component } from "react";
import TemperatureInput from "./TempratureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoillingVerdict from "./BoillingVerdict";
export default class Calculator extends Component{
    state = {temprature:'',scale: 'c'};

    handleChange = (e,scale) =>{
        this.setState({
            temprature:e.target.value,
            scale
        });
    };


    render(){
        const {temprature,scale} = this.state;
        const celsius = scale === 'f' ? convert(temprature,toCelsius):
        temprature;
        const fahrenheit = scale === 'c' ? convert(temprature,toFahrenheit):
        temprature ;
        return(
            <div>
                <TemperatureInput scale='c' temprature={celsius} onTempratureChange={this.handleChange}/> 
                <TemperatureInput scale='f' temprature={fahrenheit} onTempratureChange={this.handleChange} /> 
                <BoillingVerdict celsius={parseFloat(temprature)} />
            </div>
        )
    }
}