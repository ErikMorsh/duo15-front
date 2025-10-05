
import Loginpage from "./Loginpage";

import Signuppage from "./Signup";
import { useState } from "react";
import './LoginPageBtn.scss';
import './Loginpage.scss';

export default function ChangePage() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const changePage = () => {
    setIsLoginPage(!isLoginPage);
  }

  return (
    <div className="btn-wrapper">
      {isLoginPage ? (
        <Loginpage onSwitch={changePage} />
      ) : (
        <Signuppage onSwitch={changePage} />
      )}
    </div>
  );
}
