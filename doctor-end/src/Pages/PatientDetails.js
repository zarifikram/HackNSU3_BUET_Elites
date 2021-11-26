import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import {Box,Typography,Avatar,Toolbar,IconButton,Button,Chip,CircularProgress} from "@mui/material"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function Home({match}) {
    let patientkey;
    //const patientKey=match.params.id
    const [tabIndex,setTabIndex]=React.useState(1)
    const tabChange=(event,newValue)=>{
        setTabIndex(newValue)
    }
    const patients={
        "1":{
            name:"Salman Sayeed",
            age:"21",
            height:"1.8",
            weight:"65",
            sex:"male",
            emergency:true,
            address:"#452",
            street:"12",
            phone:"01293492034",
            city:"Dhaka",
            doctor:"Aslam"
        }
    }
    const [loading,setLoading]=useState(false)
    const [patientData,setPatientData]=useState({
        name:"Salman Sayeed",
        age:"21",
        height:"1.8",
        weight:"65",
        sex:"male",
        emergency:true,
        address:"#452",
        street:"12",
        phone:"01293492034",
        city:"Dhaka",
        doctor:"Aslam",
    })
    const [tests,setTests]=useState([{
        name:"Blood O2",
        value:"140",
        unit:"mm",
        time:"14:02",
        date:"25 Nov, 2021"
    }])
    return (
        <Box > 
            {!loading && <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt="Aslam Miah"  sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"},bgcolor:"#ff80ab"}}/>
                <Typography variant="h5" fontFamily="Bree Serif">{patientData.name}</Typography>
                <Typography variant="p" color="#8f8f8f" fontFamily="Bree Serif">{patientData.address}</Typography>
                <Typography variant="h5" fontFamily="Bree Serif"></Typography>
            </Box> 
            <Box sx={{width:"80vw",height:"20vh",border:"1px solid #ff4081",borderRadius:"1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <Typography variant="h3" color="primary" fontFamily="Bree Serif">Dermaitis</Typography>
              <Typography variant="p" fontFamily="Bree Serif">Started Treatment : 25 Mar 2018</Typography>
            </Box>
            <Box sx={{ width: {xs:"90vw",md:"80vw"}, typography: 'body1' }}>
            <TabContext value={tabIndex}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={tabChange} aria-label="lab API tabs example" variant="scrollable">
                  <Tab label="Basic Information" value="1" wrapped/>
                  <Tab label="Previous Tests" value="2" wrapped/>
                  <Tab label="Take Actions" value="3" wrapped/>
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="p" fontFamily="Bree Serif">Age : {patientData.age}yrs</Typography>
                    <Typography variant="p" fontFamily="Bree Serif">Height : {patientData.height}m</Typography>
                    <Typography variant="p" fontFamily="Bree Serif">Weight : {patientData.weight}</Typography>
                    <Typography variant="p" fontFamily="Bree Serif">Gender : {patientData.sex}</Typography>
                    <Typography variant="p" fontFamily="Bree Serif">Address : {patientData.address}</Typography>
                    
                </Box>
              </TabPanel>
              <TabPanel value="2">
                Tests :
                {tests.map(item=>(<Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography fontFamily="Bree Serif">{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{display:"flex"}}>

                  <Timeline position="alternate">
                  {tests.map(item=>(
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary"/>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box>
                            <Typography color="primary" fontFamily="Bree Serif">{item.date}</Typography>
                            <Typography sx={{color:"#636363"}} fontFamily="Bree Serif">{item.time}</Typography>
                            <Typography fontFamily="Bree Serif">{item.value} {item.unit}</Typography>
                        </Box>
                        
                    </TimelineContent>
                  </TimelineItem>))}
                </Timeline>


                  </Box>
                </AccordionDetails>
              </Accordion>))}
              </TabPanel>
              <TabPanel value="3">
                <Box sx={{width:{xs:"90vw",md:"80vw"},display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6" fontFamily="Bree Serif">Toggle Critical</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6" fontFamily="Bree Serif">Call Patient</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6" fontFamily="Bree Serif">Set Appointment</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6" fontFamily="Bree Serif">Create Test</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6" fontFamily="Bree Serif">Set Physical Visit</Typography></Button>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
            </Box>}
            {loading && <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress /><Typography>Loading Patient Data.... </Typography></Box>}
        </Box>
    )
}
