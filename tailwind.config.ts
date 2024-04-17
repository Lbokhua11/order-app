import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        footer: "0px -8px 20px 0px rgba(0, 0, 0, 0.29)",
      },
      screens: {
        400: "400px",
      },
      height: {
        "vh-minus-header-footer": "calc(100vh - 8.75rem)",
      },
    },
  },
  plugins: [],
};
export default config;
