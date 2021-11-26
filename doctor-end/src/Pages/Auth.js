import { Typography,TextField,Box, Button } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Auth() {
    const [name,setName]=React.useState(null)
    const navigate=useNavigate()
    return (
        <div>
            <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography variant="h3" color="primary" sx={{marginBottom:"3vh"}} fontFamily="Bree Serif">Login</Typography>
                <Box sx={{width:"80vw",display:"flex",flexDirection:"column"}}>
                    <TextField sx={{marginBottom:"2vh"}} id="outlined-basic" label="User Name" variant="outlined" fullwidth onChange={(e)=>setName(e.target.value)}/>
                    <TextField type="password" sx={{marginBottom:"2vh"}} id="outlined-basic" label="Password" variant="outlined" fullwidth/>
                    <Button variant="contained" onClick={()=>navigate("/")} fullwidth sx={{fontFamily:"Bree Serif"}}>Login</Button>
                </Box>
            </Box>
        </div>
    )
}