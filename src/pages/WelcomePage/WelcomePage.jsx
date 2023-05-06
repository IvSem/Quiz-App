import { Box, Typography } from '@mui/material';
import { CustomButton, Error, Loader } from 'components';
import CustomTextField from 'components/CustomTextField/CustomTextField';
import SelectFields from 'components/SelectFields/SelectFields';
import { useAxios } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	changeAmount,
	changeCategory,
	changeDifficulty,
	changeScore,
	changeType,
} from 'redux/questions/slice/slice';

const difficultyOptions = [
	{
		id: 'easy',
		name: 'Easy',
	},
	{
		id: 'medium',
		name: 'Medium',
	},
	{
		id: 'hard',
		name: 'Hard',
	},
];

const typeOptions = [
	{
		id: 'multiple',
		name: 'Multiple Choise',
	},
	{
		id: 'boolean',
		name: 'True/False',
	},
];

const WelcomePage = () => {
	const { response, error, isLoading } = useAxios({ url: 'api_category.php' });
	const navigate = useNavigate();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changeCategory(''));
		dispatch(changeDifficulty(''));
		dispatch(changeType(''));
		dispatch(changeAmount(10));
		dispatch(changeScore(0));
	}, [dispatch]);

	const handleSubmit = e => {
		e.preventDefault();
		navigate('/questions');
	};

	return (
		<>
			<Box textAlign="center" pt={{ xs: '15px', sm: '30px', md: '50px' }}>
				<Typography
					variant="h1"
					fontSize={{ xs: '32px', sm: '48px', md: '64px' }}
					sx={{
						background: `linear-gradient(to right, rgb(0, 0, 255), rgb(103, 18, 103))`,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
					fontWeight="700"
					mb={{ xs: '8px', sm: '15px', md: '30px' }}
				>
					Quiz App
				</Typography>

				<Typography variant="body1" fontWeight="700" fontSize="20px">
					Settings
				</Typography>

				{error && <Error error={error} />}

				{isLoading && <Loader />}

				{!isLoading && !error && (
					<form onSubmit={handleSubmit}>
						<SelectFields
							options={response.trivia_categories}
							label="Category"
						/>
						<SelectFields options={difficultyOptions} label="Difficulty" />
						<SelectFields options={typeOptions} label="Type" />
						<CustomTextField label="Amount of Questions" />
						<Box mt={3}>
							<CustomButton onClick={() => {}} type="submit">
								Get Started
							</CustomButton>
						</Box>
					</form>
				)}
			</Box>
		</>
	);
};

export default WelcomePage;
