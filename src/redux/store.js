import { configureStore } from '@reduxjs/toolkit';
import { questionsSlice } from './questions/slice/slice';

export const store = configureStore({
	reducer: {
		questions: questionsSlice.reducer,
	},
});
