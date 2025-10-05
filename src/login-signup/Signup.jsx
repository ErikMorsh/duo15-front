import closeIcon from './image/close.svg'
import '../login-signup/Loginpage.scss'
import SignupRsponseBtn from './SignupResponse'
import AgeSignInput from './ageSignInput'
import InputBox from './inputBox';

export default function Signup(){
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

                    <h1>How old are you?</h1>

                    <AgeSignInput/>
                </form>

            </div>

        </div>
    )
}