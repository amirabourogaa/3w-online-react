import React, { useState } from "react";

function ManualValidationForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
    } else {
      setError("");
      alert("Mot de passe validé !");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mot de passe :
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Valider</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default ManualValidationForm;
