import React from "react";

function StyledForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Inscription</h2>
        
        {/* Nom complet */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            placeholder="Entrez votre nom complet"
            className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        {/* Mot de passe */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition-colors"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default StyledForm;
