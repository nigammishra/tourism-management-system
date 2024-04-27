import React, { useEffect, useNavigate, useState } from "react";
import Swal from "sweetalert2";
// import { Modal, Button, Form } from 'react-bootstrap';

function LoginModal({ show, onHide, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
 
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    if (loginError) {
      const timeoutId = setTimeout(() => {
        // Reload after 5 seconds if login error occurs
        window.location.reload();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [loginError]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "nigam" && password === "nigam123") {
      sessionStorage.setItem("isLoggedIn", "true");

      // navigate('/Package');
      Swal.fire({
        icon: "success",

        text: " Logged In Successfully.",
      });
    } else {
      // Show an error message
      // alert('Invalid username or password');
      setLoginError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid username or password!",
        html: `<a href="/LoginModel">Back to login</a>`,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    onHide();
  };



 
  
  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      id="loginModal"
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-fullscreen " role="document">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h5 className="modal-title">Login</h5> */}
            <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={onHide}  aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </form> */}

            {/* resposive form */}
            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={onHide}  aria-label="Close"></button> */}
            <div className="container responsiveformdesgn">
              <div className="loginresponsivestyle">
                {/* <h2 className="activee"> sign in </h2> */}
                <form className="p-t80 backfacedesgn">
                  {/* <input type="text" className="text" name="username" /> */}
                  <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                  <span className="spandesgn">username</span>
                  <br />
                  <br />
                  {/* <input type="password" className="text" name="password" /> */}
                  <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                  <span className="spandesgn">password</span>
                  <br />
                  <input
                    type="checkbox"
                    id="checkbox-1-1"
                    className="custom-checkbox"
                  />
                  <label className="labelstyle" htmlFor="checkbox-1-1">
                    Entering the odisha tourism
                  </label>
                  <button   onClick={handleLogin} className="signin1">Login In</button>
                  <hr />
                  <a className="forgotpass" href="#">
                    Forgot Password?
                  </a>
                </form>
              </div>
            </div>


               {/* responsive design end */}



            <div className="bodydegn">
              <main className="container logincontainer active" id="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-container login">
                      <form className="form-control">
                        <h1>Login</h1>
                        <div className="social-iconss">
                          <a>
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
                          </a>
                          <a>
                            <i
                              className="fab fa-linkedin-in"
                              aria-hidden="true"
                            />
                          </a>
                          <a>
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
                          </a>
                          <a>
                            <i
                              className="fab fa-twitter"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                        <span>Entering the tourism odisha</span>
                        {/* <input className="form-input" type="text" placeholder="Email" fdprocessedid="j0foqu" /> */}
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <input className="form-input" type="text" placeholder="****" fdprocessedid="ynyvmt" /> */}
                        <a>Remember your password</a>
                        <button
                          type="submit"
                          onClick={handleLogin}
                          fdprocessedid="o8jcd"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <section className="toggle-container">
                      <div className="toggle">
                        <div className="toggle-panel toggle-left">
                          <h1>Welcome Travelers</h1>
                          <span>Login for Better Experience and Travel With Us</span>
                          {/* <button
                            id="registrar"
                            className="hidden"
                            fdprocessedid="50o2zg"
                          >
                            Registrar
                          </button> */}
                        </div>
                        {/* <div className="toggle-panel toggle-right">
                          <h1>Bienvenido</h1>
                          <span>Introduce tus datos personales</span>
                          <button
                            id="login"
                            className="hidden"
                            onClick={handleLogin}
                            fdprocessedid="id111"
                          >
                            {" "}
                            Login
                          </button>
                        </div> */}
                      </div>
                    </section>
                  </div>
                </div>
              </main>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary"  onClick={onHide}>Close</button>
            <button type="button" className="btn btn-primary hidden" onClick={handleLogin}>Login</button>
            
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

// https://codepen.io/shahrilamrias/pen/vdQXmL
