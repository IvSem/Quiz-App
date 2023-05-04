import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { lazy, Suspense } from 'react';

const Welcome = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const Question = lazy(() => import('../pages/QuestionsPage/QuestionsPage'));
const Results = lazy(() => import('../pages/ResultPage/ResultPage'));

export const App = () => {
	return (
		<Suspense fallback={<></>}>
			<Container maxWidth={'lg'}>
				<CssBaseline />

				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="questions" element={<Question />} />
					<Route path="results" element={<Results />} />
				</Routes>
			</Container>
		</Suspense>
	);
};
