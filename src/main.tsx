import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from '@/store/index.ts';
import { Provider } from 'react-redux';
import Final from './components/screens/final/Final.tsx';
import Home from './components/screens/home/Home.tsx';
import Question from './components/screens/question/Question.tsx';
import './styles/index.css';
import QuizTemplate from './components/shared/templates/QuizTemplate.tsx';

export type AppDispatch = typeof store.dispatch;

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/quiz',
		element: <QuizTemplate />,
		children: [
			{
				path: ':questionId',
				element: <Question />,
			},
		],
	},
	{
		path: '/final',
		element: <Final />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
