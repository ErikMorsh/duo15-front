import closeIcon from './image/close.svg'
// import '../login-signup/Loginpage.scss'
import AgeSignInput from './AgeSignInput'
import { useNavigate } from 'react-router-dom'
import CaptionText from './CaptionText'

export default function Signup(){
    const navigate = useNavigate();
    return(
        <div className='container'>

            <header>
                <section className='closeIcon'>
                <img src={closeIcon} alt="close"/>
                </section> 
                
                <button onClick={() => navigate("/Loginpage")}>LOGIN</button>
            </header>

            <div className="form-wrapper">

                <form>

                    <h1>How old are you?</h1>

                    <AgeSignInput/>

                    
                
                    
                </form>

                <CaptionText/>
            </div>

        </div>
    )
}