export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0da0629e78msh9370c1cbd653942p190c66jsna0f38d1ffe73",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla ",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
