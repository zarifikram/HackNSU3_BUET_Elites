import React from 'react'
import {Paper,Box,Avatar,Typography, Divider,Button,Chip} from "@mui/material"
import { useNavigate } from 'react-router-dom'




export default function PatientCard(props) {
    const navigate=useNavigate()
    console.log(props)
    return (
        <Paper elevation={5} sx={{width:{xs:"80vw",md:"20vw"},minHeight:"30vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",margin:"2vh 2vw"}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",width:"18vw"}}>
                <Box sx={{display:"flex",alignItems:"center",width:{xs:"70vw",md:"18vw"},marginTop:"3vh"}}>
                    <Avatar alt="Remy Sharp"  sx={{marginRight:"1vw"}}/>
                    <Typography variant="h6" fontFamily="Bree Serif">{props.data.name}</Typography>
                </Box>
                <Divider variant="middle" sx={{width:{xs:"70vw",md:"18vw"},margin:"1vh 0"}}/>
            </Box>
        
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",textAlign:"right",width:{xs:"70vw",md:"18vw"},marginTop:"1vh"}}>
                <Typography variant="p" sx={{fontFamily:"Bree Serif"}}>Age : {props.data.age}yrs</Typography>
                <Typography variant="p" sx={{fontFamily:"Bree Serif"}}>Height : {props.data.height}m</Typography>
                <Typography variant="p" sx={{fontFamily:"Bree Serif"}}>Weight : {props.data.weight}kg</Typography>
                {props.data.emergency && <Chip label="Critical" color="primary" sx={{margin:"1vh 0",fontFamily:"Bree Serif"}}/>}
            </Box>
    
            <Button variant="contained" sx={{margin:"3vh 0"}}>
                <Typography fontFamily="Bree Serif" variant="h6" onClick={()=>{navigate(`/patients/${props.data.key}`)}}>Track Patient</Typography>
            </Button>
        </Paper>
    )
}