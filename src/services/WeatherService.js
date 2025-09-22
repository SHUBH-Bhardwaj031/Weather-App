import axios from "axios";
const apiKey = "70eda467c1494dd992a151714250406";
const baseUrl = "https://api.weatherapi.com/v1/";
export const getWeather = async (city) => {
  const completeUrl = `${baseUrl}/current.json?key=${apiKey}&q=${city}`;
  // // return fetch(completeUrl);
  // const response = await fetch(completeUrl);
  // const data = await response.json();
  // return data;

  const resposne = await axios.get(completeUrl);
  return resposne.data;
};
