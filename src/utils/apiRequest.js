import { APIKEY } from "./apiKey";

export const weather = async () => {
  const location = "Paris";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const temperature = data.current.temp_c;
      const icon = data.current.condition.icon
      return { temperature, icon };
    } else {
      throw new Error(response);
    }
  } catch (error) {
    console.error(error);
  }
};