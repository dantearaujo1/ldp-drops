import React from 'react';

function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Funcionalidades do Produto</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureItem title="Fácil de pedir" description="Aperte o botão e envie um sinal de que você precisa de água para seu fornecedor" />
          <FeatureItem title="Rápida instalação" description="Sincronize com a ajuda de um QR Code" />
          <FeatureItem title="Rápida entrega" description="Receba água sempre que precisar." />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-72 text-primary">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Features;
