import React from 'react'
import {Box,Typography} from '@mui/material'
import PatientCard from '../Components/PatientCard'
const patient={
    name:"Salman Sayeed",
    age:"21",
    height:"1.8",
    weight:"65",
    emergency:true
}
export default function Patients() {
    return (
        <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            <Box sx={{backgroundColor:"#2196f3",width:"100vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10vh"}}>
                <Typography variant="h2" sx={{color:"white"}}>Patients Page</Typography>
                <Typography sx={{color:"white"}}>All the patients the you are currently supervising</Typography>
            </Box>
            <Box sx={{width:"80vw",marginTop:"-10vh",minHeight:"100vh",display:"flex", alignItems:"flex-start", justifyContent:"center", flexWrap:"wrap"}}>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
                <PatientCard data={patient}/>
            </Box>
        </Box>
    )
}