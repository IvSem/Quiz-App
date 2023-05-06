import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	changeCategory,
	changeDifficulty,
	changeType,
} from 'redux/questions/slice/slice';

const SelectFields = ({ label, options }) => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = event => {
		setValue(event.target.value);
		switch (label) {
			case 'Category':
				dispatch(changeCategory(event.target.value));
				break;
			case 'Difficulty':
				dispatch(changeDifficulty(event.target.value));
				break;
			case 'Type':
				dispatch(changeType(event.target.value));
				break;

			default:
				break;
		}
	};
	return (
		<Box
			mt={1}
			width={{ xs: '100%', sm: '100%', md: '75%', lg: '50%' }}
			mx="auto"
		>
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} onChange={handleChange} label={label}>
					{options?.map(({ id, name }) => (
						<MenuItem value={id} key={id}>
							{name}
						</MenuItem>
					))}
					{/*<MenuItem value={'Options1'}>Options1</MenuItem>
					<MenuItem value={'Options2'}>Options2</MenuItem>
					<MenuItem value={'Options3'}>Options3</MenuItem>*/}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectFields;
