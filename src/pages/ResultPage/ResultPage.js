import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectQuestions } from 'redux/questions/slice/slice';

const ResultPage = () => {
	const navigate = useNavigate();
	const { score } = useSelector(selectQuestions);
	const handleBackToSettings = () => {
		navigate('/');
	};
	return (
		<Box mt={30} textAlign="center">
			<Typography variant="h3" fontWeight="bold" mb={3}>
				Final Score {score}
			</Typography>
			<Button onClick={handleBackToSettings} variant="outlined">
				back to settings!
			</Button>
		</Box>
	);
};

export default ResultPage;
