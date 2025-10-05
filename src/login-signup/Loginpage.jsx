
// import { useNavigate } from "react-router-dom";
import '../login-signup/Loginpage.scss'
import SignupRsponseBtn from './SignupResponse'
import InputBox from './inputBox';
// import { Link } from "react-router-dom"
import closeIcon from './image/close.svg'
import googleIcon from './image/google.svg'
import facebookIcon from './image/facebook.svg'


export default function  Loginpage(){
    // const navigate = useNavigate();
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

                        
                        <InputBox/>
        
                         
                        {/* <button onClick={() => navigate("/signup")}>Go to Sign Up</button> */}
                        
                   
                    <div className="or-separator">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line">  </div>
                    </div>
                    
                    <div className='account'>
                        <button className='accountbtn'>
                            <img src={googleIcon} alt=""/><span>GOOGLE</span>
                        </button>
                        <button className='accountbtn'> 
                            <img src={facebookIcon} alt=""/><span>FACSBOOK</span>
                        </button>
                    </div>
                    
                </form>

                    <div className='footer-text'>
                        <div>
                            <span className='top-text'>By signing in to Duolingo, you agree to our 
                                <a href='./#'><b> Terms </b></a> 
                                 and 
                                <a href='./#'><b> Privacy Policy </b>.</a>  
                            </span>
                        </div>
                        <div className='botton-last-text'>
                            <span className='botton-text '>
                                This site is protected by reCAPTCHA Enterprise and the Google           
                                <a href='./#'> <b> Privacy Policy </b> </a>
                                 and 
                                <a href='./#'> <b> Terms of Service </b> </a>
                                 apply.
                            </span>
                             
                        </div>
                    </div>

            </div>




        </div>
    );
}
