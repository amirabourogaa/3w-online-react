import React, { useRef } from "react";

function UncontrolledForm() {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email :
        <input type="email" ref={emailRef} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default UncontrolledForm;
