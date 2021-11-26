import { Typography,TextField,Box, Button } from '@mui/material'
import React from 'react'

export default function Auth() {
    const [name,setName]=React.useState(null)

    return (
        <div>
            <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography variant="h3" color="primary" sx={{marginBottom:"3vh"}}>Login</Typography>
                <Box sx={{width:"80vw",display:"flex",flexDirection:"column"}}>
                    <TextField sx={{marginBottom:"2vh"}} id="outlined-basic" label="User Name" variant="outlined" fullwidth onChange={(e)=>setName(e.target.value)}/>
                    <TextField sx={{marginBottom:"2vh"}} id="outlined-basic" label="Password" variant="outlined" fullwidth/>
                    <Button variant="contained" onClick={()=>alert(name)} fullwidth>Login</Button>
                </Box>
            </Box>
        </div>
    )
}