import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Footer from './component/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Package from './pages/Package';
import Roombook from './pages/Roombook';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/tourism-management-system" element={<Home/>}/>
        <Route exact path="/about-us" element={<About/>}/>
        <Route exact path="/Package" element={<Package/>} />
        <Route exact path="/Roombook" element={<Roombook/>}/>
        <Route exact path="/Gallery" element={<Gallery/>}/> 
        <Route exact path="/Contact" element={<Contact/>}/> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App