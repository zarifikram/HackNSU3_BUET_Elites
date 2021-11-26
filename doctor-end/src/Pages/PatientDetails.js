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
  
    return (
        <Box > 
            {!loading && <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt="Aslam Miah"  src="/static/images/avatar/1.jpg" sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"},bgcolor:"#ff80ab"}}/>
                <Typography variant="h5">{patientData.name}</Typography>
                <Typography variant="p" color="#8f8f8f">{patientData.address}</Typography>
                <Typography variant="h5"></Typography>
            </Box> 
            <Box sx={{width:"80vw",height:"20vh",border:"1px solid #ff4081",borderRadius:"1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <Typography variant="h3" color="primary">Dermaitis</Typography>
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
                    <Typography variant="p">Age : {patientData.age}yrs</Typography>
                    <Typography variant="p">Height : {patientData.height}m</Typography>
                    <Typography variant="p">Weight : {patientData.weight}</Typography>
                    <Typography variant="p">Gender : {patientData.sex}</Typography>
                    <Typography variant="p">Address : {patientData.address}</Typography>
                    
                </Box>
              </TabPanel>
              <TabPanel value="2">
                Tests :
                {tests.map(testName=>(<Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{testName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{display:"flex"}}>

                  <Timeline position="alternate">
                  {patientData.tests[testName].map(item=>(
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary"/>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box>
                            <Typography color="primary">{item.date}</Typography>
                            <Typography sx={{color:"#636363"}}>{item.time}</Typography>
                            <Typography>{item.value} {item.unit}</Typography>
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
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6" onClick={()=>{
                      fetch(`http://151.106.113.197/toggle-emergency?key=${patientKey}`)
                    }}>Toggle Critical</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Call Patient</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Set Appointment</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Create Test</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Set Physical Visit</Typography></Button>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
            </Box>}
            {loading && <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress /><Typography>Loading Patient Data.... </Typography></Box>}
        </Box>
    )
}
