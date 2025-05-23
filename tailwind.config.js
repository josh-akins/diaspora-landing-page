module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3da647",
          dark: "#228821",
          light: "#82ee8f",
        },
        secondary: {
          DEFAULT: "#f6921e",
          dark: "#d6a42f",
          light: "#ffdd57",
        },
        accent: {
          DEFAULT: "#1a3a4f",
          light: "#667085",
          dark: "#0f1728",
        },
        success: {
          DEFAULT: "#82ee8f",
          dark: "#3da647",
        },
        warning: {
          DEFAULT: "#f6921e",
          dark: "#d6a42f",
        },
        error: {
          DEFAULT: "#f81d07",
          dark: "#cc4722",
        },
        gray: {
          100: "#f9fafb",
          200: "#f4f4f4",
          300: "#e6e6e6",
          400: "#c2c1cc",
          500: "#8b909a",
          600: "#667085",
          700: "#4d5154",
          800: "#2c312e",
          900: "#1d1d1f",
        },
        background: {
          primary: "#ffffff",
          secondary: "#f6fff7",
          tertiary: "#fff6ec",
          dark: "#075f4c",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        kalam: ["Kalam", "cursive"],
        lexend: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        sm: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        md: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        lg: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        xl: "0px 16px 44px rgba(0, 0, 0, 0.16)",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};