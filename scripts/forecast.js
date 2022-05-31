const key = "U1ncGSk9bRZ2LeLhGzdre3MgNIFUbpuH";

// get weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const res = await fetch(base + query);
  const data = await res.json();
  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const res = await fetch(base + query);
  const data = await res.json();
  return data[0];
};
// getCity("manchester")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log("couldn't fetch"));

// getWeather("329260");
