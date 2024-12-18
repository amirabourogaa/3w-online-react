import React from 'react';
import { useParams } from 'react-router-dom';


export default  function ProduitDetails ({products}) {
  const { id } = useParams();
  const produit = products.find(p => p.id === parseInt(id, 10));

  return produit ? (
    <div>
      <h1>{produit.name}</h1>
      <p>Détails du produit {id}</p>
    </div>
  ) : (
    <h1>Produit non trouvé</h1>
  );
};


