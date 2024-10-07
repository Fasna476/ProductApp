import React from 'react'
import { TextField, Typography } from '@mui/material'

const AddP = () => {
  return (
    <div>
        <Typography variant='h5' fontFamily={'inherit'} align='inherit' >Product Details</Typography><br/>
        <TextField id="outlined-basic" label=" Name" variant="outlined" /> <br/><br/>
        <TextField id="outlined-basic" label="Price" variant="outlined" /> <br/><br/>
        <TextField id="outlined-basic" label="Category" variant="outlined" /><br/><br/>
        

    </div>
  )
}

export default AddP