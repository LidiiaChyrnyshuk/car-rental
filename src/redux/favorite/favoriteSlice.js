import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  cars: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,

  reducers: {
    addToFavoritePage(state, action) {
      state.cars.push(action.payload);
    },
    deleteFromFavoritePage(state, action) {
      state.cars = state.cars.filter(car => car !== action.payload);
    },
  },
});

export const favoriteReducer = favoritesSlice.reducer;

export const { addToFavoritePage, deleteFromFavoritePage } =
  favoritesSlice.actions;

// export const favoriteSlice = createSlice({
// 	name: "favorite",
// 	initialState: [],
// 	reducers: {
// 		addToFavoritePage(state, action) {
// 			return (state = [...state, action.payload]);
// 		},
// 		deleteFromFavoritePage(state, action) {
// 			return (state = state.filter((user) => user !== action.payload));
// 		},
// 	},
// });
// export const { addToFavoritePage, deleteFromFavoritePage } =
// 	favoriteSlice.actions;

// export const favoriteReducer = favoriteSlice.reducer;
