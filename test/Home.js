import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Patients from './Pages/Patients'
import Critical from './Pages/Critical'
export default function Home() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={Home}></Route>
                    <Route path="/Patients" component={Patients}></Route>
                    <Route path="/Auth" component={Auth}></Route>
                    <Route path="/Critical" component={Critical}></Route>
                    <Route path="/" component={Home}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
