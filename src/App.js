// import logo from './logo.svg';

import './App.css';
import Login from './components/Login';
// import {Routes, Route } from 'react-router-dom';
import About from './components/About';
import Register from './components/Register'
import HomePage from './components/HomePage';
import Adminlogin from './components/Adminlogin';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// import Register from './components/Register';
// import Login from './components/Login';
import Room from './components/Meeting/Room';
// import Temp from './components/Temp';

import App2 from './components/App2';
import PeriodsDash from './components/PeriodsDash';

import ManPage from './components/Manopose/ManPage';

import DietList from './components/Diet/DietList';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HealthProfessionals from './components/HealthProfessionals';
import Ecom from './components/Ecom';

// import Ecom from './components/Ecom';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/slogin" element={<Login/>}/>
        <Route path="/alogin" element={<Adminlogin/>}/>
        <Route path="/ward" element={<HealthProfessionals/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Ecom/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/quiz" element={<Quiz/>} /> */}
        {/* <Route path="/" element={<Temp/>} /> */}
        <Route path="/register" element={<Register/>} />
        <Route path="/app" element={<App2/>} />
        <Route path="/room" element={<Room/>} />
        <Route path="/periods" element={<PeriodsDash/>} />
        <Route path="/manpose" element={<ManPage/>} />
        <Route path="/diet" element={<DietList/>} />
        </Routes>
<Footer/>
    </Router>
    </>
  );
}

export default App;
