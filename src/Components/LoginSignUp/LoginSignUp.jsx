import React, { useState } from 'react';
import './LoginSignUp.css'

import userProfile from '../Assets/images.png'
import googleLogo from '../Assets/google.256x84.png'
const LoginSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [passwordValue, setPasswordValue] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmailValue(value);
            validateEmail(value);
            if (emailError) setEmailError('');
        } else if (name === 'password') {
            setPasswordValue(value);
            if (passwordError) setPasswordError('');
        }
    };

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsValid(pattern.test(email));
      };

  const handleNextClick = () => {
    if (!emailValue.trim()) {
        // If email is empty, set an error message
        setEmailError('Please enter your email.');
    } else {
        // Proceed to the next step
        setIsActive(true);
    }
};

const handleFinishClick = () => {
    if (!emailValue.trim()) {
        setEmailError('Please enter your email.');
    }
    if (!passwordValue.trim()) {
        setPasswordError('Please enter your password.');
    }
};

  return (
    <div className='Container'>
        <div className={`header ${isActive ? '' : 'active'}`}>
            <img src={googleLogo} alt="google" className='google' />
            <div className="text">Sign in</div>
            <h4>with your Google account</h4>
            <h4 className='blue'>Learn more about using your account</h4>
            
            <div className="inputs">
                <div className="input">
                    <input type='email'value={emailValue} name='email' onChange={handleInputChange} placeholder='Enter your Email' className='passwordInput'
                    style={{ borderColor: isValid ? '' : 'red' }}
                    />
                    
                    <div className="errors">
                    {emailError && <p className="error">{emailError}</p>}
                    {!isValid && <span style={{ color: 'red' }}>Invalid email address</span>}
                    </div>
                    <div className="password">
                        <h4 className="blue">Forgot email?</h4>
                    </div>

                    
                </div>
            </div>
            <div className="submitContainer" onClick={handleNextClick}>
                <div className="button">Next</div>
            </div>
        </div>

        <div className={`header ${isActive ? 'active' : ''}`}>
            <img src={googleLogo} alt="google" className='google' />
            <div className="text">Almost done</div>

            <div className="user">
                <img src={userProfile} alt="" className='user'/>
                <div className="text">{emailValue}</div>
            </div>
            
            <div className="inputs">
                <div className="input">
                    <input type={showPassword ? 'text' : 'password'} 
                        name='password'
                        value={passwordValue}
                        onChange={handleInputChange} 
                        placeholder='Enter your password' 
                        className='passwordInput'/>
                    {passwordError && <p className="error">{passwordError}</p>}
                    <div className="password">
                        <label htmlFor="showPassword">
                        <input type="checkbox" name="showPassword" id="showPassword" checked={showPassword}
          onChange={handleCheckboxChange}/>
                        Show password
                        </label>
                    </div>
                    
                </div>
            </div>
            <div className="submitContainer">
                <div className="button" onClick={handleFinishClick}>Finish</div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp