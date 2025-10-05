
import "./SignUpButton.scss";


export default function SignButton() {
    return(
        <div className="signup-container">
            <button className="signup-button"> SIGN UP</button>
            <div className="signup-text">
                <p>Don't have an account? </p>
                <span><a href="./">SIGN UP</a></span>
            </div>
        </div>
    )
}