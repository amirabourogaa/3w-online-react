import React from 'react'
import { Link } from 'react-router-dom'

export default function Produits({products}) {
  return (
    <div>
    <h1>Produits</h1>
    <ul>
      {products.map(produit => (
        <li key={produit.id}>
          <Link to={`/produits/${produit.id}`}>{produit.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
