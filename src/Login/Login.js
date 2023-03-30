import React from 'react'
import './Login.css';


const login = () => {
  return (
    <div className='main'>
        <div className='loginbox'>
            <img className='avatar' src=
             'https://www.w3schools.com/howto/img_avatar.png' 
            alt='avatar'/>
            <h1>Login Here</h1>
            <form>
                <p>Username</p>
                <input type='text' name='' placeholder='Enter Username' />
                <p>Password</p>
                <input type='password' name='' placeholder='Enter Password' />
                <input type='submit' name='' value="login" />
            </form>
            {/* <button>Login</button> */}
            <a href='#'>Lost your password?</a>
            <a href='#'>Didn't have an account?</a>
        </div>
    </div>
  )
}

export default login
