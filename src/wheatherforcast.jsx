// import { useState } from "react";

// function WeatherForecast() {
//   const apiKey = "5c1af69ff4cc74c4dbb6b627d140d2b1";

//   const [wheather, setWeather] = useState({
//     icon: "https://openweathermap.org/img/wn/10d@2x.png",
//     temp: "20",
//     city: "Paris",
//     humidity: "30",
//     speed: "20",
//   });
//   function handleSubmit(event) {
//     event.preventDefault();

//     let city = event.target.city.value;
//     if (!city) {
//       alert("please enter the city name");
//       return;
//     }
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         city +
//         "&units=metric&appid=" +
//         apiKey
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error();
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setWeather({
//           icon:
//             "https://openweathermap.org/img/wn/" +
//             data.weather[0].icon +
//             "@2x.png",
//           temp: data.main.temp,
//           city: data.name,
//           humidity: data.main.humidity,
//           speed: data.wind.speed,
//         });
//       })
//       .catch((error) => {
//         alert("unable to fetch wheather forecast");
//       });
//   }

//   return (
//     <div className="container mx-auto my-10 px-4">
//       <div className="bg-blue-300 text-white p-6 rounded-lg w-full max-w-md mx-auto text-center shadow-lg">
//         <h2 className="text-2xl font-bold mb-6">Weather Forecast</h2>
//         <form
//           className="flex justify-center mb-4 gap-2"
//           onSubmit={handleSubmit}
//         >
//           <input
//             className="flex-grow border px-3 py-2 rounded text-black"
//             placeholder="City"
//             name="city"
//             type="text"
//           />
//           <button
//             className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//         <img src={wheather.icon} alt="weather icon" className="mx-auto" />
//         <h1 className="text-4xl font-semibold mt-4">{wheather.temp}°C</h1>
//         <h2 className="text-xl mb-6">{wheather.city}</h2>
//         <div className="flex justify-between text-sm">
//           <div className="flex flex-col items-center">
//             <i className="bi bi-water text-lg"></i>
//             <span>Humidity</span>
//             <span>{wheather.humidity}%</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <i className="bi bi-wind text-lg"></i>
//             <span>Wind Speed</span>
//             <span>{wheather.speed} m/s</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WeatherForecast;

import React, { useState } from "react";
const apiKey = "5c1af69ff4cc74c4dbb6b627d140d2b1";

function Wheatherforcast() {
  const [wheather, setWeather] = useState({
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    temp: "20",
    city: "Paris",
    humidity: "30",
    speed: "20",
  });

  function handleSubmit(event) {
    event.preventDefault();

    let city = event.target.city.value;
    if (!city) {
      alert("please enter the city");
      return;
    }
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setWeather({
          icon:
            "https://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@2x.png",
          temp: data.main.temp,
          city: data.name,
          humidity: data.main.humidity,
          speed: data.wind.speed,
        });
      })
      .catch((error) => {
        alert("unable to fetch wheather forecast");
      });
  }

  return (
    <div>
      <div className="container mx-auto my-10 px-4">
        <div className="bg-blue-300 text-white p-6 rounded-lg w-full max-w-md mx-auto text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Weather Forecast</h2>
          <form
            className="flex justify-center mb-4 gap-2"
            onSubmit={handleSubmit}
          >
            <input
              className="flex-grow border px-3 py-2 rounded text-black"
              placeholder="City"
              name="city"
              type="text"
            />
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
              type="submit"
            >
              Search
            </button>
          </form>
          <img src={wheather.icon} alt="weather icon" className="mx-auto" />
          <h1 className="text-4xl font-semibold mt-4">{wheather.temp}°C</h1>
          <h2 className="text-xl mb-6">{wheather.city}</h2>
          <div className="flex justify-between text-sm">
            <div className="flex flex-col items-center">
              <i className="bi bi-water text-lg"></i>
              <span>Humidity</span>
              <span>{wheather.humidity}%</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="bi bi-wind text-lg"></i>
              <span>Wind Speed</span>
              <span>{wheather.speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheatherforcast;
