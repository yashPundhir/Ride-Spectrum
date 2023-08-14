export const fetchCars = async (filters) => {
	const headers = {
		"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const { manufacturer, year, fuel, limit, model } = filters;

	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
		{
			headers: headers,
		}
	);

	const result = await response.json();

	return result;
};
