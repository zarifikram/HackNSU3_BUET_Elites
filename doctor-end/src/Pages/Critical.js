import React from 'react'
import PatientCard from '../Components/PatientCard'
import Header from '../Components/Header'
import {Box,Typography} from '@mui/material'
import {patients} from '../Patients'
export default function Critical() {
    let keys=Object.keys(patients)
    console.log(keys)
    return (
        <Box>
        <Header active={2}/>
        <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
             <Box sx={{backgroundColor:"#2196f3",width:"100vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:{md:"10vh"}}}>
                <Typography variant="h2" sx={{color:"white",textAlign:"center"}} fontFamily="Bree Serif" >Critical Patients</Typography>
                <Typography sx={{color:"white"}} fontFamily="Bree Serif">Shows a list of critical patients</Typography>
            </Box>
            <Box sx={{width:"80vw",marginTop:"-10vh",minHeight:"100vh",display:"flex", alignItems:"flex-start", justifyContent:"center", flexWrap:"wrap"}}>

                {keys.map(item=>{
                    if(patients[item].emergency==true){
                        return (<PatientCard data={patients[item]}/>)
                    }
                    
                })}
            </Box>
        </Box>
        </Box>
    )
}