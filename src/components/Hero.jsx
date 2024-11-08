import React from 'react';

function Hero() {
  return (
    <section className="text-center py-20 bg-primary text-white">
      <h2 className="text-4xl font-bold mb-4">Clicou, enviou!</h2>
      <p className="max-w-xl mx-auto mb-8">
        Sua água a um clique de distância. Receba água potável de qualidade em sua casa ou escritório.
      </p>
      <button className="bg-accent px-6 py-3 text-primary font-bold rounded-full hover:bg-yellow-400 transition">
        Saiba Mais
      </button>
    </section>
  );
}

export default Hero;
