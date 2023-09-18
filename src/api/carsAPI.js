import axios from "axios";
axios.defaults.baseURL = "https://648ae22b17f1536d65e9e5ee.mockapi.io";

export const getTotalCars = async (page = 1, limit = 8, signal = null) => {
	const options = {
		params: { limit, page },
	};

	const { data } = await axios.get("/cars", options);

	return data;
};
