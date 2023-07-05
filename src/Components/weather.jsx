import React, { useEffect, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

function Weather() {
  const [data, setData] = useState({
    temperature: "",
    name: "",
    humidity: "",
    cloudiness: "",
  });
  const [name, setName] = useState("");
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      if (name !== "") {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a7770f919c71dfb77b610de94948e76d&units=metric`;
        const response = await fetch(apiURL);
        const weatherData = await response.json();

        setData({
          temperature: weatherData.main.temp,
          name: weatherData.name,
          humidity: weatherData.main.humidity,
          cloudiness: weatherData.weather[0].description,
        });
      }
    };

    if (fetchData) {
      fetchDataFromAPI();
      setFetchData(false);
    }
  }, [fetchData, name]);

  const handleClick = () => {
    setFetchData(true);
  };

  return (
    <div className="container">
      <div className="weather">
        <h1>Weather:</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>
        <div className="weatherDetails">
          <div>
            <div className="Name">
              <h1>{data.name}</h1>
            </div>
          </div>
          <div>
            <div className="Temperature">
              <p>Temperature: {data.temperature}°C</p>
            </div>
          </div>
          <div>
            <div className="humidity">
              <p>Humidity: {data.humidity}%</p>
            </div>
          </div>
          <div>
            <div className="cloudiness">
              <p>Cloudiness: {data.cloudiness}</p>
            </div>
          </div>
        </div>
      </div>
      <MessengerCustomerChat
    pageId="108965818922829"
    appId="277041771537219"
  />,
    </div>
  );
}

export default Weather;