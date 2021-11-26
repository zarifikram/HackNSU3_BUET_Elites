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

//      const [patients,setPatients]=React.useState([])
  
    // const getPatients=()=>{
        
    //     fetch(`http://151.106.113.197/get-patient-data?key=${docKey}`).then(res=>res.json()).then(data=>{
    //         console.log(data)
    //         data.forEach(a=>{
    //             setPatients(prev=>[...prev,a])
    //         })
    //         setLoading(false)
    //     })
    // }
    // React.useEffect(()=>{
    //     getPatients()
    // },[])

    
export default function Patients() {
    return (
        <Box sx={{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            <Box sx={{backgroundColor:"#2196f3",width:"100vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"10vh"}}>
                <Typography variant="h2" sx={{color:"white"}} fontFamily="Bree Serif">Patients Page</Typography>
                <Typography sx={{color:"white"}} fontFamily="Bree Serif">All the patients the you are currently supervising</Typography>
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