import React from 'react'
import {Box,Typography} from '@mui/material'
export default function Home() {
    return (
        <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Typography variant="h2" color="primary" sx={{marginTop:"10vh"}} fontFamily="Bree Serif">ReMedi</Typography>
            <Typography fontFamily="Bree Serif">Telemedicine Re-imagined</Typography>
            <Box component="img" src="https://i.postimg.cc/pLvq8QcF/5207289.jpg" sx={{width:"60vw"}}></Box>
        </Box>
    )
}
