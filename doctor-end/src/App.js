import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Patients from './Pages/Patients'
import PatientDetails from './Pages/PatientDetails'
import Critical from './Pages/Critical'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/" exact element={<Home/>}></Route>
              <Route path="/Patients" exact element={<Patients/>}></Route>
              <Route path="/Patients/:id" exact element={<PatientDetails/>}></Route>
              <Route path="/Auth" exact element={<Auth/>}></Route>
              <Route path="/Critical" exact element={<Critical/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
