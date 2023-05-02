import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const SelectFields = ({ label, options }) => {
	console.log(':>  SelectFields  options:', options);
	const [value, setValue] = useState('');

	const handleChange = event => {
		setValue(event.target.value);
	};
	return (
		<Box mt={1} width="40%" mx="auto">
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
