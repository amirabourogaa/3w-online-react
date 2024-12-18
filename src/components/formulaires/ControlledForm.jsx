import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Âge :
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Afficher</button>
      </form>
      <div>Nom : {formData.name}</div>
      <div>Âge : {formData.age}</div>
    </div>
  );
}

export default ControlledForm;
