import React, { useNavigate ,useState } from 'react';
import Swal from 'sweetalert2';
// import { Modal, Button, Form } from 'react-bootstrap';

function LoginModal({ show, onHide,onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    
    e.preventDefault();
    if (username === 'nigam' && password === 'nigam123') {
      sessionStorage.setItem('isLoggedIn', 'true');
      
      // navigate('/Package');
      Swal.fire({
        icon: "success",
       
        text: " Logged In Successfully.",
        
      });
    } else {
      // Show an error message
      // alert('Invalid username or password');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid username or password!",
        html:`<a href="/LoginModel">Back to login</a>`
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    onHide();
  };
  


  return (
    <div className={`modal ${show ? 'show' : ''}`} id="loginModal" tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={onHide}  aria-label="Close"></button> */}
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </form>
             {/* <div class=" loginpagemodal">
      
      <div class="container1" id="container1">
    <div class="form-container1 sign-up-container1">
        <form class="formstyle" action="#">
            <h1>Create Account</h1>
            <div class="socialcontact-container11">
                <a href="#" class="socialcontact"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="socialcontact"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="socialcontact"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" class="inputstyle" placeholder="Name" />
            <input type="email" class="inputstyle" placeholder="Email" />
            <input type="password" class="inputstyle" placeholder="Password" />
            <button class="loginbtn">Sign Up</button>
        </form>
    </div>
    <div class="form-container1 sign-in-container1">
        <form class="formstyle" action="#">
            <h1>Sign in</h1>
            <div class="socialcontact-container11">
                <a href="#" class="socialcontact"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="socialcontact"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="socialcontact"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" class="inputstyle" placeholder="Email" />
            <input type="password" class="inputstyle" placeholder="Password" />
            <a href="#" class="forgot-password">Forgot your password?</a>
            <button class="loginbtn">Sign In</button>
        </form>
    </div>
    <div class="overlay1-container1">
        <div class="overlay1">
            <div class="overlay1-panel overlay1-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button class="ghost loginbtn" id="signIn">Sign In</button>
            </div>
            <div class="overlay1-panel overlay1-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost loginbtn" id="signUp">Sign Up</button>
            </div>
        </div>
    </div>
</div>
</div>  */}
 </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary"  onClick={onHide}>Close</button> */}
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
