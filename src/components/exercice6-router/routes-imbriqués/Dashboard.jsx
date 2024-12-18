import React from 'react'

export default function Dashboard() {
  return (
    <div>
    <h1>Tableau de bord</h1>
    <nav>
      <ul>
        <li><Link to="stats">Statistiques</Link></li>
        <li><Link to="settings">Paramètres</Link></li>
        <li><Link to="history">Historique</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>
  )
}
