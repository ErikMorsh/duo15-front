import { useNavigate } from "react-router-dom";
import "./InputBox.scss";
import { useState } from "react";
import closeIcon from "./image/close2.svg";



export default function InputWithLink() {
  const navigate = useNavigate();
  const [value, setValue] = useState(""); 

  const handleForgetClick = () => {
    navigate("./"); 
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="input-container">
       <div className="input-wrapper">
         <input
           type="text"
           placeholder="Email or username"
           className="userNameInput"
           value={value}
           onChange={(e) => setValue(e.target.value)}
         />
         {value && (
           <img
             src={closeIcon}
             alt="clear"
             className="clear-icon"
             onClick={handleClear}
           />
         )}
       </div>

       <input
         type="password"
         placeholder="Password"
         className="passwordInput"
       />

       <a
         href="./"
         className="forgrt-link"
         onClick={(e) => {
           e.preventDefault();
           handleForgetClick();
         }}
       >
         FORGET?
       </a>
    </div>
  );
}

