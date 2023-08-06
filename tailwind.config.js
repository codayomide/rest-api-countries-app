/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dmBlue: "hsl(209, 23%, 22%)",
        dmBgVeryDarkBlue: "hsl(207, 26%, 17%)",
        lmVeryDarkBlue: "hsl(200, 15%, 8%)",
        lmDarkGray: "hsl(0, 0%, 52%)",
        lmBgLightGray: "hsl(0, 0%, 98%)",
        neutralWhite: "hsl(0, 0%, 100%)"
      }
    },

    screens: {
      'ss': '350px',
      'xs' : '485px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',  
      'xl': '1280px',
      '2xl': '1536px' 
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}