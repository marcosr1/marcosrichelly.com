module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      keyframes: {
        cloudMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        cloud: 'cloudMove 60s linear infinite',
        'cloud-slow': 'cloudMove 120s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
