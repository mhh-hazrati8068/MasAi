import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#D14E5B',
          dark: '#85323c',
          light: '#F7D6D9',
        },
        secondary: {
          DEFAULT: '#3B82F6',
          dark: '#1E40AF',
          light: '#DBEAFE',
        },
        neutral: {
          DEFAULT: '#BDBDBD',
          dark: '#333333',
          light: '#F5F5F5',
        },
        success: '#22C55E',
        warning: '#F59E42',
        error: '#EF4444',
      },
      fontFamily: {
        gotham: [
          'Gotham',
          'GothamRegular',
          'GothamBook',
          'GothamLight',
          'GothamBold',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
