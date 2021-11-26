
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {Box,Typography,AppBar,Toolbar,Button} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import WarningIcon from '@mui/icons-material/Warning';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
    const [active,setActive]=useState(0)
    const navigate=useNavigate()
    const HomeClick=()=>{
        setActive(0)
        navigate("/")
    }
    const PatientsClick=()=>{
        setActive(1)
        navigate("/patients")
    }
    const CriticalClick=()=>{
        setActive(2)
        navigate("/critical")
    }
    const AccountClick=()=>{
        setActive(3)
        navigate("/auth")
    }
    return (
        <AppBar color="default" position="fixed" sx={{ top: {xs:'auto',md:0}, bottom: {xs:0,md:"auto" }}}>
            <Toolbar sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Box sx={{display:{xs:"none",md:"flex"},flex:".8"}}>
                    <Typography color="primary" variant="h4">Remedi</Typography>
                </Box>
                <Button onClick={HomeClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active==0 ? <HomeIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <HomeIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active==0 ? <Typography color="primary">Home</Typography> : <Typography>Home</Typography>}
               
                </Button>
              
                <Button onClick={PatientsClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active==1 ? <HotelIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <HotelIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active==1 ? <Typography color="primary">Patients</Typography> : <Typography>Patients</Typography>}
                </Button>
                <Button onClick={CriticalClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active===2 ? <WarningIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <WarningIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active===2 ? <Typography color="primary">Critical</Typography> :<Typography>Critical</Typography>}
               
                </Button>
                <Button onClick={AccountClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active==3 ? <PersonIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <PersonIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active==3 ? <Typography color="primary">Account</Typography> : <Typography>Account</Typography>}
                </Button>
                
            </Toolbar>
        </AppBar>
    )
}

