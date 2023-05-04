import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)',
			}}
		>
			<CircularProgress color="secondary" size={100} thickness={3} />
		</Box>
	);
};
