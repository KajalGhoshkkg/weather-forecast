import React, { useState } from "react";
import axios from "axios";

const City = () => {
  const [value, setValue] = useState("");

  const getData = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d8958c705f8c6c935a5adb8003270af0`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <input
        type="text"
        name="cityName"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="button" onClick={getData}>
        search
      </button>
    </>
  );
};
export default City;
