module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#eee',
        secondary: '#f4f4f4',
        accent: '#2976ff',
        tertiary: '#d2d2d2',
      },
      fontFamily: {
        chess: '"Noto Chess", "Noto Sans", sans-serif',
      },
    },
  },
  content: ['./components/**/*.jsx', './pages/**/*.js'],
};
