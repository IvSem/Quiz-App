import { Box, CardMedia, CircularProgress, Typography } from '@mui/material';
import { CustomButton } from 'components';
import CustomTextField from 'components/CustomTextField/CustomTextField';
import SelectFields from 'components/SelectFields/SelectFields';
import { useAxios } from 'hooks';
import ErrorSvg from 'images/error-404.svg';
//import { useSelector } from 'react-redux';
//import { selectQuestions } from 'redux/questions/slice/slice';

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
	//const {
	//	question_category,
	//	question_difficulty,
	//	question_type,
	//	amount_of_question,
	//	score,
	//} = useSelector(selectQuestions);
	const { response, error, isLoading } = useAxios({ url: 'api_category.php' });

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<>
			<Box textAlign="center" pt={{ xs: '15px', sm: '30px', md: '50px' }}>
				<Typography
					variant="h1"
					sx={{
						fontSize: {
							xs: '32px', // розмір шрифту для маленьких екранів
							sm: '48px', // розмір шрифту для середніх екранів
							md: '64px', // розмір шрифту для великих екранів
						},
					}}
					fontWeight="700"
					mb={{ xs: '8px', sm: '15px', md: '30px' }}
				>
					Quiz App
				</Typography>

				<Typography variant="body1" fontWeight="700" fontSize="20px">
					Settings
				</Typography>

				{error && (
					<>
						<Typography color={'#ed5656'} mt={5} variant="h4">
							Some went wrong! <br />
							{error.message}
						</Typography>
						<CardMedia
							sx={{
								width: '30%',
								mx: 'auto',
							}}
							component="img"
							image={ErrorSvg}
							alt={error.message}
						/>
					</>
				)}

				{isLoading && (
					<Box mt={15}>
						<CircularProgress color="secondary" size={100} thickness={3} />
					</Box>
				)}

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
