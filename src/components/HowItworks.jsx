import React from 'react';

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Como funciona?</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-80 p-4 text-center transition-transform hover:scale-105">
            <img src="./src/assets/qrcode.png" alt="QR Code" className="w-48 h-48 object-cover mx-auto" />
            <h4 className="text-xl font-semibold mt-4">Passo 1: Sincronização via QR Code</h4>
            <p>Conecte seu Wi-Fi e seu fornecedor ao produto de maneira simples e eficiente.</p>
          </div>
          <div className="w-80 p-4 text-center transition-transform hover:scale-105">
            <img src="./src/assets/drop.png" alt="Aperte o botão" className="w-48 h-48 object-cover mx-auto" />
            <h4 className="text-xl font-semibold mt-4">Passo 2: Aperte o botão</h4>
            <p>Um sinal será enviado para seu fornecedor preparar a entrega de sua água.</p>
          </div>
          <div className="w-80 p-4 text-center transition-transform hover:scale-105">
            <img src="./src/assets/water.png" alt="Entrega de água" className="w-48 h-48 object-cover mx-auto" />
            <h4 className="text-xl font-semibold mt-4">Passo 3: Receba</h4>
            <p>Um galão de água será entregue na sua porta!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
