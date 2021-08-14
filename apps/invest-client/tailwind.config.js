const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      join(__dirname, 'src/app/**/*.{js,ts,jsx,tsx}'),
      ...createGlobPatternsForDependencies(__dirname),
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
