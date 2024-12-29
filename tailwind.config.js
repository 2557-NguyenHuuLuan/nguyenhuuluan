/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chỉ định các tệp có chứa mã HTML/JSX
  ],
  theme: {
    extend: {
      boxShadow:{
        'extra-bold':'0 10px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
