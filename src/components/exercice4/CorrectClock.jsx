import React, { useState, useEffect } from "react";

const CorrectClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // [] signifie que cet effet s'exécute une seule fois au montage

  return (
    <div>
      <h1>Horloge</h1>
      <h2>Heure actuelle : {time}</h2>
    </div>
  );
};

export default CorrectClock;
