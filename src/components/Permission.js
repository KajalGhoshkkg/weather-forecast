import React from "react";
import axios from "axios";

const Permission = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };
  const showPosition = (position) => {
    let lattitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=d8958c705f8c6c935a5adb8003270af0`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return <button onClick={getLocation}>check weather</button>;
};
export default Permission;