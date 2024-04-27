import './App.css';
import { Navigate, Outlet,BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Footer from './component/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Package from './pages/Package';
import Roombook from './pages/Roombook';
import Contact from './pages/Contact';
import { useState } from 'react';
import LoginModal from './pages/LoginModal';


const PrivateRoutes = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return (
    isLoggedIn ? <Outlet /> : <Navigate to='/LoginModal' />
  )
}

function App() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const [showLoginModal, setShowLoginModal] = useState(true);

  const handleCloseLoginModal = () => setShowLoginModal(false);



  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');

  // const handleLogin = (username) => {
  //   setUsername(username);
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUsername('');
  // };


  return (
    <>

{/* {!isLoggedIn ? (
        <div>
          
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      ) : (
        <div>
    
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {isLoggedIn && <p>You are logged in.</p>}
      {!isLoggedIn && <LoginModal onLogin={handleLogin} />} */}
  
<LoginModal show={showLoginModal} onHide={handleCloseLoginModal} /> 
{isLoggedIn && 
      <Router>
      
      <Header/>
      <Routes> 
         <Route element={<PrivateRoutes />}>    
        <Route exact path="/tourism-management-system" element={<Home/>}/>
        <Route exact path="/about-us" element={<About/>}/>
        <Route exact path="/Package" element={<Package/>} />
        <Route exact path="/Roombook" element={<Roombook/>}/>
        <Route exact path="/Gallery" element={<Gallery/>}/> 
        <Route exact path="/Contact" element={<Contact/>}/>
        </Route>  
      </Routes>
      <Footer/>
    </Router>
    }
    </>
  );
}

export default App