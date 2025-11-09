
import{Routes, Route } from "react-router-dom";
import Loginpage from "./login-signup/component/LoginMainPage/Loginpage";
import Signuppage from "./login-signup/Signup";

function App() {
  return (
    <Routes>
      {<Route path="/" element={<Loginpage/>}/> }
      {<Route path="/Loginpage" element={<Loginpage/>}/> }
      {<Route path="/Signuppage" element={<Signuppage/>}/> }

    </Routes>
  );
}

export default App;
