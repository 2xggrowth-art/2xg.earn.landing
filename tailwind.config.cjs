/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#22C55E",
          "green-dark": "#15803D",
          "green-light": "#F6FBF7"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      fontSize: {
        'xs': ['0.8125rem', { lineHeight: '1.5' }],      // 13px
        'sm': ['0.9375rem', { lineHeight: '1.5' }],      // 15px
        'base': ['1rem', { lineHeight: '1.6' }],         // 16px (scales with html font-size)
        'lg': ['1.125rem', { lineHeight: '1.6' }],       // 18px
        'xl': ['1.25rem', { lineHeight: '1.5' }],        // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],        // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],      // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],       // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],          // 48px
      }
    }
  },
  plugins: []
};
