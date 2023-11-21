/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Chivo', 'sans-serif']
      }
    },
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    options: {
      safelist: ['text-[#E0A64E]', 'text-[#3A312E]', 'text-[#D7D7D7]', 'test-[#8D4337]']
    }
  }
};
