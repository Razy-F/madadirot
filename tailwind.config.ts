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
        "gradient-footer":"linear-gradient(266.49deg, #383D4E 0%, #3DC293 100%)",
        "gradient-header": "linear-gradient(267.95deg, rgba(48, 153, 117, 0.8) 53.65%, rgba(48, 153, 117, 0) 100%)",
      },
      fontFamily: {
        jakarta: ['var(--jakarta-sans)']
      },
      colors: {
        'site-color': '#3DC293',
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
export default config;
