import { Box, Button, Stack, Typography } from '@mui/material';
import { Loader } from 'components';
import { getRandomInt } from 'helpers/functions';
import { useAxios } from 'hooks';
import { decode } from 'html-entities';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeScore, selectQuestions } from 'redux/questions/slice/slice';

const QuestionsPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [options, setOptions] = useState([]);
	const {
		question_category,
		question_difficulty,
		question_type,
		amount_of_question,
		score,
	} = useSelector(selectQuestions);

	const apiUrl = `api.php?amount=${amount_of_question}${
		question_category ? `&category=${question_category}` : ''
	}${question_difficulty ? `&difficulty=${question_difficulty}` : ''}${
		question_type ? `&type=${question_type}` : ''
	}`;

	const { response, error, isLoading } = useAxios({ url: apiUrl });

	useEffect(() => {
		if (response?.results.length > 0) {
			const question = response.results[currentIndex];
			let answers = [...question.incorrect_answers];
			answers.splice(
				getRandomInt(question.incorrect_answers.length),
				0,
				question.correct_answer
			);
			setOptions(answers);
		}
	}, [response, currentIndex]);

	const handleClickAnswer = e => {
		const question = response.results[currentIndex];
		if (e.target.textContent === question.correct_answer) {
			dispatch(changeScore(score + 1));
		}
		if (currentIndex + 1 < response.results.length) {
			setCurrentIndex(currentIndex + 1);
		} else {
			navigate('/results');
		}
	};

	return (
		<Box
			pt={5}
			textAlign="center"
			sx={{
				height: '100vh',
			}}
		>
			{isLoading && <Loader />}

			{!isLoading && !error && (
				<>
					<Typography variant="h4">Question {currentIndex + 1}</Typography>
					<Typography mt={3} variant="h6">
						{decode(response.results[currentIndex].question)}
					</Typography>

					<Box mt={3} width="50%" mx="auto">
						<Stack spacing={3}>
							{options.map(el => (
								<Button
									key={el}
									sx={{
										py: 1,
										fontSize: '20px',
										color: '#2a2a2a	',
										borderBottom: '1px solid black',
										backgroundColor: '#b5ece99c',
									}}
									type="button"
									variant="text"
									onClick={handleClickAnswer}
								>
									{decode(el)}
								</Button>
							))}
						</Stack>
					</Box>
					<Typography mt={5} variant="h6">
						Score {score}/{response.results.length}
					</Typography>
				</>
			)}
		</Box>
	);
};

export default QuestionsPage;
