

import closeIcon from "./image/close2.svg";
import "./InputBox.scss";
import { useState } from "react";



export default function InputWithLink() {

  const [value, setValue] = useState(""); 


  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Age"
          className="usernameInput"
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

     
    </div>
  );
}

