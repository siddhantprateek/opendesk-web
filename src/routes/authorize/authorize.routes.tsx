import React, { useContext } from 'react'
import './authorize.styles.css';
import { AuthContext } from '../../context/authprovider';

const Authorize = () => {
  const { login } = useContext(AuthContext)

  return (
    <div className='authorize-page'>
      <div className='login-container'>
        <h2>Login</h2>
        <input type="text" className='login-input' placeholder='Enter username or email address.' />
        <input type="password" className='login-input' placeholder='Password, shhhh!!! keep it secret.' />
        <div className="other-login-action">
          <a className='forgot-password' href='/login/forgot'>Forgot Password?</a>
        </div>
        <button className='login-button-74' onClick={() => login()}>Login</button>
      </div>
    </div>
  )
}

export default Authorize