import React, { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Essaie incorrect de mettre à jour l'heure
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <h1>Horloge</h1>
      <h2>Heure actuelle : {time}</h2>
    </div>
  );
};

export default Clock;
