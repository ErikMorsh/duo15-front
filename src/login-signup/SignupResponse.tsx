

import "./SignUpButton.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function SignButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);

  const isLoginPage = location.pathname.includes("Login") || location.pathname === "/";

  const handleNavigation = () => {
    if (isLoginPage) {
      navigate("/Signuppage");
    } else {
      navigate("/Loginpage");
    }
  };

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
        <p>
          {isLoginPage ? "Don't have an account?" : "Already have an account?"}
        </p>

        {isSmallScreen ? (
          <span onClick={handleNavigation}>
            {isLoginPage ? "SIGNUP" : "LOGIN"}
          </span>
        ) : (
          <button onClick={handleNavigation}>
            {isLoginPage ? "SIGNUP" : "LOGIN"}
          </button>
        )}
      </div>
    </div>
  );
}