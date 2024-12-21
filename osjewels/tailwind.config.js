/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include all JavaScript/TypeScript files in the `src` folder
    "./node_modules/@shadcn/ui/components/**/*.{js,jsx,ts,tsx}", // Include shadcn components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
