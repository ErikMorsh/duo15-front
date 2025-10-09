
import '../login-signup/Loginpage.scss'
import SignupRsponseBtn from './SignupResponse'
import InputBox from './inputBox';
import AccountBtn from './AccountBtn';
import closeIcon from './image/close.svg'
import CaptionText from './CaptionText';


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

                        <InputBox/>
                        <button className='loginbtn'>LOGIN</button>
                        
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
