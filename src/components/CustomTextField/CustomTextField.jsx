import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAmount } from 'redux/questions/slice/slice';

const CustomTextField = ({ label }) => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const handleChange = e => {
		setValue(e.target.value);
		dispatch(changeAmount(e.target.value));
	};
	const handleError = e => {
		if (!(value >= 1 && value <= 50)) {
			alert('1-50 pls write');
			setValue(1);
			dispatch(changeAmount(1));
		}
	};
	return (
		<Box mt={1} width="40%" mx="auto">
			<FormControl fullWidth>
				<TextField
					value={value}
					label={label}
					onChange={handleChange}
					onBlur={handleError}
					variant="outlined"
					type="number"
				/>
			</FormControl>
		</Box>
	);
};

export default CustomTextField;
