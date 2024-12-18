import React from 'react';
import UserList from './components/exercice1/UserList';
import Library from './components/exercice2/Library';
import Counter from './components/exercice3/Counter';
import CorrectClock from './components/exercice4/CorrectClock';
import Clock from './components/exercice4/Clock';
import BugCounter from './components/exercice4/BugCounter';
import { TaskProvider } from './components/exercice5/TaskContext';
import TaskManager from './components/exercice5/TaskManager';
import TaskList from './components/exercice5/TaskList';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Produits from './components/exercice6-router/dynamic-routes/Produits';
import ProduitDetails from './components/exercice6-router/dynamic-routes/ProduitDetails';
import Dashboard from './components/exercice6-router/routes-imbriqués/Dashboard';

const App = () => {
  const users = [
    {
      name: 'Amira Ben Salah',
      age: 28,
      description: 'Développeuse full-stack passionnée par le MERN et MEAN stack.',
      image: 'https://via.placeholder.com/100',
      buttonText: 'Voir Profil'
    },
    {
      name: 'Ali Kacem',
      age: 35,
      description: 'Architecte logiciel spécialisé dans les solutions cloud.',
      image: 'https://via.placeholder.com/100',
      buttonText: 'Contactez-moi'
    },
    {
      name: 'Noura Bensalem',
      age: 24,
      description: 'Designer UI/UX, passionnée par la création d’expériences uniques.',
      image: 'https://via.placeholder.com/100',
      buttonText: 'En savoir plus'
    }
  ];

  const produits = [
    { id: 1, name: 'Produit 1' },
    { id: 2, name: 'Produit 2' },
  ];
  return (
    <div style={{ padding: '20px' }}>
{/* 
      <h1 style={{ textAlign: 'center', color: '#3C7169' }}>Liste des utilisateurs: Composants paramétré (props)</h1>
      <UserList users={users} />
      <h1>Exercice 2 : Map & Filter</h1>
      <Library/>
      <h1>Exercice 3: useState()</h1>
      <Counter/>
      <h1>Exercice 4: useEffect()</h1>
      <h2>Horloge <span style={{color:'red'}}>SANS</span> useEffect</h2>
      <Clock/>
      <h2>Horloge <span style={{color:'red'}}>AVEC</span> useEffect</h2>
      <CorrectClock/>
      <BugCounter/>

      <TaskProvider>
      <div>
        <h1 className='text-red-600'>Gestion de tâches collaborative</h1>
        <TaskManager />
        <TaskList />
      </div>
    </TaskProvider> */}

<Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>Accueil</h1>} />
      <Route path="/about" element={<h1>À propos</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/produits" element={<Produits products={produits}  />} />
      <Route path="/produits/:id" element={<ProduitDetails products={produits}  />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="stats" element={<h2>Statistiques</h2>} />
        <Route path="settings" element={<h2>Paramètres</h2>} />
        <Route path="history" element={<h2>Historique</h2>} />
      </Route>
    </Routes>
  </Router>
   
    </div>
  );
};

export default App;
