

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Loginpage from "./login-signup/Loginpage";
// import Signuppage from "./login-signup/Signup";
// import ForgetPassword from "./login-signup/ForgetPassword"; // اضافه کن

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Loginpage />} />
//       <Route path="/signup" element={<Signuppage />} />
//       <Route path="/forget-password" element={<ForgetPassword />} /> {/* ✅ این */}
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Loginpage from "./login-signup/Loginpage";
import Signuppage from "./login-signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
    </Routes>
  );
}

export default App;
