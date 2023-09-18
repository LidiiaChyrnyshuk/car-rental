import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648ae22b17f1536d65e9e5ee.mockapi.io";

export const fetchCars = createAsyncThunk(
	"cars/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/cars");
			return response.data;
		} catch (evt) {
			return thunkAPI.rejectWithValue(evt.message);
		}
	}
);
