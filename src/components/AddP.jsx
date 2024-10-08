import React from 'react'
import { TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';





const AddP = () => {
  const navigate = useNavigate()

  const handleSubmit=()=>{
    navigate('/dashboard')
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
  return (
    <div>
        <Typography variant='h5' fontFamily={'inherit'} align='inherit'  >Product Details</Typography><br/>
        <TextField id="outlined-basic" label=" Name" variant="outlined" /> <br/><br/>
        <TextField id="outlined-basic" label="Price" variant="outlined" /> <br/><br/>
        <TextField id="outlined-basic" label="Category" variant="outlined" /><br/><br/>
        
        <Button
     component="label"
     role={undefined}
     variant="contained"
     tabIndex={-1}
     startIcon={<CloudUploadIcon />}
   >
     Upload Image
     <VisuallyHiddenInput
       type="file"
       onChange={(event) => console.log(event.target.files)}
       multiple
     />
   </Button>
   <br/><br/>
   <Button variant='contained' color='success'onClick={handleSubmit}>Submit</Button>
        

    </div>
  )
}

export default AddP