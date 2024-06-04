import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import odishamap from '../image/map2-min.jpg';
import Swal from 'sweetalert2';
import { PulseLoader } from 'react-spinners';
// import Loginimage from '../Images/loginpage.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  // const handleRegister = () => {
  //   console.log('Registering with:', { username, password });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Pupun' && password === '12345') {
      sessionStorage.setItem('isLoggedIn', 'true');
      // Redirect to the protected route
      navigate('/Roombook');
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Logged in successfully",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    } else {
      // Show an error message
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid username and password!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

   const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000); 
  }, []);

 

  return (
    <div>
     {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (<>
      
     {/* <h1>Tourism Management System</h1> */}
      <div className="container-fluid loginbackground ">
        <div className="row loginstyle" >
          <div className="col-md-6 ">
            <img src={odishamap} className='login-image' alt="Login" />

          </div>
          <div className="col-md-6 ">
             <h1>Tourism Management System</h1>
            <form onSubmit={handleSubmit}>
              {/* <img src={Loginimage1} className='login-image1' alt="Login" /> */}
              <div className="mb-3">
                <label htmlFor="username" className="form-labell">Username</label>
                <input
                  type="text"
                  className="form-controll"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-labell">Password</label>
                <input
                  type="password"
                  className="form-controll"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btnstyle" onClick={handleLogin}>Login</button>
              {/* <Link to="/Register"><button type="button" className="btn btn-secondary ms-2" onClick={handleRegister}>Register</button></Link> */}
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid loginbackground1 " id='login'>
        <div className="row loginstyle" >
          <div className="col-md-6 ">
            <img src={odishamap} className='login-image' alt="Login" />

          </div>
          <div className="col-md-6 ">
             <h1>Tourism Management System</h1>
            <form onSubmit={handleSubmit}>
              {/* <img src={Loginimage1} className='login-image1' alt="Login" /> */}
              <div className="mb-3">
                <label htmlFor="username" className="form-labell">Username</label>
                <input
                  type="text"
                  className="form-controll"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-labell">Password</label>
                <input
                  type="password"
                  className="form-controll"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btnstyle" onClick={handleLogin}>Login</button>
              {/* <Link to="/Register"><button type="button" className="btn btn-secondary ms-2" onClick={handleRegister}>Register</button></Link> */}
            </form>
          </div>
        </div>
      </div>
      </>
       )}
    </div>
  );
}

export default Login;
