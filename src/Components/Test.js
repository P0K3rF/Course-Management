import React, { useState } from "react";

function InputField() {
    // State to store value from the input field
    const [inputValue, setInputValue] = useState("")
  
    // Input Field handler
    const handleUserInput = (e) => {
      setInputValue(e.target.value);
    };
  
    // Reset Input Field handler
    const resetInputField = () => {
      setInputValue("");
    };
  
    return (
      <div>
        {/* Input Field */}
        <input type="text" value={inputValue} onChange={handleUserInput} />
  
        {/* Reset button */}
        <button onClick={resetInputField}>Reset</button>
      </div>
    );
  }
  export default InputField;