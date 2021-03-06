import React from 'react'
import {Box,Typography} from '@mui/material'
import PatientCard from '../Components/PatientCard'
import Header from '../Components/Header'
import {patients} from '../Patients'
const patient={
    name:"Salman Sayeed",
    age:"21",
    height:"1.8",
    weight:"65",
    emergency:true
}


export default function Patients() {
    let keys=Object.keys(patients)
    console.log(keys)
    return (
        <Box>
        <Header active={1}/>
        <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            <Box sx={{backgroundColor:"#2196f3",width:"100vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:{xs:"10vh"}}}>
                <Typography variant="h2" sx={{color:"white"}} fontFamily="Bree Serif">Patients Page</Typography>
                <Typography sx={{color:"white"}} fontFamily="Bree Serif">All the patients the you are currently supervising</Typography>
            </Box>
            <Box sx={{width:"80vw",marginTop:"-10vh",minHeight:"100vh",display:"flex", alignItems:"flex-start", justifyContent:"center", flexWrap:"wrap"}}>
                {keys.map(item=>(
                    <PatientCard data={patients[item]}/>
                ))}
            </Box>
        </Box>
        </Box>
    )
}