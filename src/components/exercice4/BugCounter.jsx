import React, { useEffect, useState } from "react";

const BugCounter = () => {
    
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const toggleCounter = () => {
//     setIsRunning(!isRunning);
//   };

//   // L'incrémentation directe provoque un bug
//   if (isRunning) {
//     setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//   }

const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Nettoyage pour éviter des intervalles multiples
    return () => clearInterval(interval);
  }, [isRunning]);


  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={toggleCounter}>
        {isRunning ? "Arrêter" : "Démarrer"}
      </button>
    </div>
  );
};

export default BugCounter;
