import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({
  temprature,
  scale,
  onTempratureChange,
}) {
  return (
    <fieldset>
      <legend>Enter The temprature in {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={temprature}
        onChange={(e) => onTempratureChange(e, scale)}
      />
    </fieldset>
  );
}
