import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './reducers/answer.ts';

const reducers = combineReducers({
	answersReducer,
});

export type State = ReturnType<typeof reducers>;

export default configureStore({
	reducer: reducers,
});
