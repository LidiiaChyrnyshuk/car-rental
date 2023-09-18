import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
	name: "favorite",
	initialState: [],
	reducers: {
		addToFavoritePage(state, action) {
			return (state = [...state, action.payload]);
		},
		deleteFromFavoritePage(state, action) {
			return (state = state.filter((user) => user !== action.payload));
		},
	},
});
export const { addToFavoritePage, deleteFromFavoritePage } =
	favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
