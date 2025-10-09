
import "./SignUpButton.scss";

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function SignButton() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="signup-container">
      <div className="signup-text">
        <p>Don't have an account?</p>

        {isSmallScreen ? (
          <span
            onClick={() => navigate("/Signuppage")}>
            SIGNUP
          </span>
        ) : (
          <button onClick={() => navigate("/Signuppage")}>SIGNUP</button>
        )}
      </div>
    </div>
  );
}
