// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Partners from './Components/Partners';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Footer from './component/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';
// import Initiative from './Pages/Initiative';
// import Team from './Pages/Team';
// import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
         <Route exact path="/about-us" element={<About/>}/>
        {/*<Route exact path="/initiative" element={<Initiative/>}/>
        <Route exact path="/team" element={<Team/>}/>
        <Route exact path="/contact" element={<Contact/>}/>*/}
        <Route exact path="/Gallery" element={<Gallery/>}/> 
      </Routes>
      {/* <Partners/> */}
      <Footer/>
    </Router>
  );
}

export default App