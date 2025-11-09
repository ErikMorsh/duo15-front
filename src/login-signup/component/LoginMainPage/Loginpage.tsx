
import './Loginpage.scss';
import SignupRsponseBtn from '../../SignupResponse';
import InputBox from '../InputBox/inputBox';
import AccountBtn from '../../AccountBtn';
import closeIcon from '../../image/close.svg'
import CaptionText from '../../CaptionText';
import {loginUser} from '../../API/auth'
import LoginBtn from '../LoginBtn/LoginBtn';
import { useState } from 'react';


export default function  Loginpage(){

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')   
    
    const handleLogin = async (e)=>{
        e.preventDefault()
        try{
            const res = await loginUser({username, phone: password});
            console.log('Responsive: ' , res);
            localStorage.setItem('token: ', res.data) 
        }catch (err) {
        console.error('Login failed:', err);
    }
    }
    
    return(
        <div className='container'>

            <header>
               <section className='closeIcon'>
                <img src={closeIcon} alt="close"/>
                </section> 
                
                <SignupRsponseBtn/>
            </header>

            
            <div className="form-wrapper">
                <form>
                    <h1 >Login</h1>

                        <InputBox
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setpassword={setpassword}
                        />
                        
                        {/* <LoginBtn onClick={handleLogin}/> */}
                        <button onClick={handleLogin}>asdf</button>
                        
                    <div className="or-separator">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line">  </div>
                    </div>

                    <AccountBtn/>
                    
                </form>

                   <CaptionText/>

            </div>
        </div>
    );
}
