import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input({label,isRequired,placeholder}) {
  return (
    <TextField className='border border-[#CBCBCB]'
          required={isRequired}
          id="outlined-required"
          label={label}
          defaultValue={placeholder}
          sx={
            {
                
                '& label': {color:'#6C25FF'},
                '& .MuiInputBase-root': { height: '40px' },
                width: '335px',

            }
          }
        />
  );
}