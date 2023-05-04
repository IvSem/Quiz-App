import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
	name: 'questions',
	initialState: {
		question_category: '',
		question_difficulty: '',
		question_type: '',
		amount_of_question: 10,
		score: 0,
	},
	reducers: {
		changeCategory(state, action) {
			state.question_category = action.payload;
		},
		changeDifficulty(state, action) {
			state.question_difficulty = action.payload;
		},
		changeType(state, action) {
			state.question_type = action.payload;
		},
		changeAmount(state, action) {
			state.amount_of_question = action.payload;
		},
		changeScore(state, action) {
			state.score = action.payload;
		},
	},
});

export const selectQuestions = state => state.questions;
export const {
	changeCategory,
	changeDifficulty,
	changeType,
	changeAmount,
	changeScore,
} = questionsSlice.actions;
