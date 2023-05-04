import { CardMedia, Typography } from '@mui/material';
import ErrorSvg from 'images/error-404.svg';

export const Error = ({ error }) => {
	return (
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
	);
};
