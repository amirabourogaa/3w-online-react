import React, { useEffect, useState } from "react";

function Counter() {
  // Définir l'état du compteur avec un état initial de 0
  const [count, setCount] = useState(0);

  // Fonctions pour gérer les événements
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const isLoggedIn= true

localStorage.setItem("title","Bonjour")
var title = localStorage.getItem("title")
console.log(title)



return <div>
  
  <h2>{title}</h2>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>Augmenter</button>
      <button onClick={decrement}>Diminuer</button>
      <button onClick={reset}>Réinitialiser</button> 
     
  </div>

 

}

export default Counter;
