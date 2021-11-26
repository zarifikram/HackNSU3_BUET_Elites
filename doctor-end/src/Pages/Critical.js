import React from 'react'
import {Box,Typography} from '@mui/material'
export default function Critical() {
    return (
        <div>
             <Box sx={{backgroundColor:"#2196f3",width:"100vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10vh"}}>
                <Typography variant="h2" sx={{color:"white"}}>Critical Patients</Typography>
                <Typography sx={{color:"white"}}>Shows a list of critical patients</Typography>
            </Box>
            <Box sx={{width:"80vw",minHeight:"100vh",display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}></Box>
        </div>
    )
}