
import '../login-signup/Loginpage.scss'
import SignupRsponseBtn from './SignupResponse'
import closeIcon from './image/close.svg'
import googleIcon from './image/google.svg'
import facebookIcon from './image/facebook.svg'


export default function  Loginpage(){
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

                    <div className='InputBox'>     
                        <input type="text"
                        placeholder='Email or username' />

                        <input type="text"
                        placeholder='Password' />
                    </div>

                    <button className='loginbtn'>LOG IN</button>
                   
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