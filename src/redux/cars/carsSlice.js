import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOperations';

// const carsInitialState = {
//   cars: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const carsSlice = createSlice({
//   name: 'cars',
//   initialState: carsInitialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchCars.pending, handlePending)
//       .addCase(fetchCars.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.cars = action.payload;
//       })

//       .addCase(fetchCars.rejected, handleRejected),
// });

// export const carsReducer = carsSlice.reducer;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,

    [fetchCars.rejected]: handleRejected,

    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const hasCommonElements = action.payload.some(payloadItem => {
        return state.items.some(stateItem => stateItem.id === payloadItem.id);
      });
      if (hasCommonElements) {
        state.items = action.payload;
      } else {
        state.items = [...state.items, ...action.payload];
      }
    },
  },
});

export const carsReducer = carsSlice.reducer;
