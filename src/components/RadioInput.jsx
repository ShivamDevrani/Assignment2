import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioInput() {
  return (
    <FormControl required>
      <FormLabel  sx={{ color: '#1D2226' , font:'15px Rubix' }}   id="demo-row-radio-buttons-group-label">Are you an Agency?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio sx={{'&.Mui-checked': {
                  color: '#6C25FF', 
                },}} />} label="Yes" />
        <FormControlLabel value="No" control={<Radio  sx={{'&.Mui-checked': {
                  color: '#6C25FF', 
                },}}  />} label="No" />
       
      </RadioGroup>
    </FormControl>
  );
}
