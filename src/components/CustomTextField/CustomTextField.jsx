import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';

const CustomTextField = ({ label }) => {
	const handleChange = () => {};
	return (
		<Box mt={1} width="40%" mx="auto">
			<FormControl fullWidth>
				<TextField
					label={label}
					onChange={handleChange}
					variant="outlined"
					type="number"
				/>
			</FormControl>
		</Box>
	);
};

export default CustomTextField;
