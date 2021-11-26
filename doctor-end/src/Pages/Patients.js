import React from 'react'
import {Box,Typography} from '@mui/material'

export default function Patients() {
    return (
        <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            <Box sx={{backgroundColor:"#2196f3",width:"100vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10vh"}}>
                <Typography variant="h2" sx={{color:"white"}}>Patients Page</Typography>
                <Typography sx={{color:"white"}}>All the patients the you are currently supervising</Typography>
            </Box>
            
        </Box>
    )
}