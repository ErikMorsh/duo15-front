import { useState } from "react";
import Loginpage from "./login-signup/Loginpage";
import Signuppage from "./login-signup/Signup";

function App() {
	const[isLogin , setIsLogin]= useState(true);
	return (
		<>
			{isLogin ?(
				<Loginpage onSwitch ={() => setIsLogin(false)}/>
			):(
				<Signuppage onSwitch ={() => setIsLogin(true)}/>
			)}
		
		</>
	);
}

export default App;
