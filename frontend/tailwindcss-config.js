const defaultTheme = require("tailwindcss/defaultTheme");
const config = require("@apideck/components/tailwind-config");

module.exports = config({
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: defaultTheme.colors.blue[50],
          100: defaultTheme.colors.blue[100],
          200: defaultTheme.colors.blue[200],
          300: defaultTheme.colors.blue[300],
          400: defaultTheme.colors.blue[400],
          500: defaultTheme.colors.blue[500],
          600: defaultTheme.colors.blue[600],
          700: defaultTheme.colors.blue[700],
          800: defaultTheme.colors.blue[800],
          900: defaultTheme.colors.blue[600],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/ui")],
});
