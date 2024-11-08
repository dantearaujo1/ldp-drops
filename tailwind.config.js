/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Azul primário
        secondary: '#E5F0FF', // Azul claro para fundo
        accent: '#FFD700', // Amarelo para destacar botões, por exemplo
      },
    },
  },
  plugins: [],
}
