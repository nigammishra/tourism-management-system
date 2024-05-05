import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import odishamap from '../image/map2-min.jpg';
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
    if (username === 'nigam' && password === '123456') {
      sessionStorage.setItem('isLoggedIn', 'true');
      // Redirect to the protected route
      navigate('/Roombook');
    } else {
      // Show an error message
      alert('Invalid username or password');
    }
  };

  return (
    <>
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
  );
}

export default Login;
