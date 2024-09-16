import './login.css';

function Login(){
    return(
        <div className='login-container'>
            <div className='login-left-container'>
            <div className='login-form-container'>
              <h2 className='login-form-heading'>Login</h2>
              <from>
              <label className='login-from-label'>User Name</label><br></br>
              <input className='login-from-input-item' type='text'></input><br></br>
              <label className='login-from-label'>Password</label><br></br> 
              <input className='login-from-input-item' type='password'></input><br></br>
              <button className='login-from-button-item' type="submit">Login</button>
              </from>
            </div>
            </div>
            <div className='login-right-container'>
            <h2 className='login-right-form-heading'>Admin Login</h2>
            <div className='login-right-form-para'>Leadership is not about being in charge. It's about taking care of those in your charge." – Simon Sinek</div>
            <div className='login-right-form-para'>Great leaders don't set out to be a leader... they set out to make a difference. It’s never about the role" —always about the goal</div>
            <div className='login-right-form-para'>Efficiency is doing things right; effectiveness is doing the right things." – Peter Drucker</div>
            {/* 
            <div className='login-right-form-para'>The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson</div> */}
            </div>
        </div>
    )
}
export default Login;