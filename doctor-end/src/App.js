import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Patients from './Pages/Patients'
import Critical from './Pages/Critical'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
              <Route path="/" exact component={Home}></Route>
              <Route path="/Patients" exact component={Patients}></Route>
              <Route path="/Auth" exact component={Auth}></Route>
              <Route path="/Critical" exact component={Critical}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
