import React from 'react';
import "./filter.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import Slider from './Slider';
// import webroukCustomRange from "https://cdn.skypack.dev/webrouk-custom-range@latest";
import { Button } from '@mui/material';



const Filterbar = () => {
  return (
   <>
     <div id="sidebar" className='shadow p-2 mb-5' >
    <header>
      <h4 className='text-left'>Course Filter</h4>
    </header>

    <Box sx={{ minWidth: 120 }} className="mt-5">
        <label>Course Type</label>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label>Course Level</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label>Course Program</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Choose Course Program</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label>Course</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">MBBS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label>Country</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Russia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label>Specialization</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">MBBS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div className="row">
        <div className="col-sm-6">
        <Box sx={{ minWidth: 120 }} className="mt-3">
    <label>Intake</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        <div className="col-sm-6">
        <Box sx={{ minWidth: 120 }} className="mt-3">
    <label className='text-white'>Specialization</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
</div>
    {/* <header>
      <h4 className='text-left'>Eligibility Filter</h4>
    </header> */}

    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label >Required Degree</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label >Grading Scheme</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label >Grading Average</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className="mt-3">
    <label >Entrance Exam</label>
      <FormControl fullWidth>
        
        <InputLabel id="demo-simple-select-label">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          className='border-0'
          style={{border:"none"}}
         
>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button className=' text-right text-light mt-3 ms-3 ' style={{backgroundColor:"#FF723A"}}>Reset</Button>
    <Button className=' text-right text-light mt-3 ms-3 ' style={{backgroundColor:"#FF723A"}}>Apply Filter</Button>






   
    
       

    </div>
   
  
   </>
  )
}

export default Filterbar