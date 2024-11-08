import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Drops</h1>
        <nav>
          <ul className="flex space-x-4 ">
            <li><a href="#features" className="hover:text-accent text-white">Funcionalidades</a></li>
            <li><a href="#how-it-works" className="hover:text-accent text-white">Como funciona</a></li>
            <li><a href="#contact" className="hover:text-accent text-white">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
