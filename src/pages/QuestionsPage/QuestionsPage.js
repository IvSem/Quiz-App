import { Box, Button, Stack, Typography } from '@mui/material';

const QuestionsPage = () => {
	return (
		<Box
			pt={5}
			textAlign="center"
			sx={{
				height: '100vh',
			}}
		>
			<Typography variant="h4">Question 1</Typography>
			<Typography mt={3} variant="h6">
				Text Question ?
			</Typography>

			<Box mt={3} width="50%" mx="auto">
				<Stack spacing={3}>
					<Button
						sx={{ py: 2, fontSize: '20px', color: '#2a2a2a	' }}
						type="button"
						variant="text"
					>
						Variant 1
					</Button>
					<Button
						sx={{
							py: 2,
							fontSize: '20px',
							color: '#2a2a2a	',
							borderBottom: '1px solid black',
						}}
						type="button"
						variant="text"
					>
						Variant 2
					</Button>
					<Button
						sx={{ py: 2, fontSize: '20px', color: '#2a2a2a	' }}
						type="button"
						variant="text"
					>
						Variant 3Variant 3
					</Button>
				</Stack>
			</Box>
			<Typography mt={5} variant="h6">
				Score 2/6
			</Typography>
		</Box>
	);
};

export default QuestionsPage;
