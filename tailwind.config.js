/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FDF6F0',
          100: '#FDECE0',
          200: '#FBD5B8',
        },
        purple: {
          DEFAULT: '#8B6FE8',
          light: '#A78BFA',
          dark: '#6D4FD0',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          light: '#FF8A6F',
          dark: '#E5553A',
        },
        navy: {
          DEFAULT: '#1F2340',
          light: '#2D3250',
        },
        'warm-gray': {
          DEFAULT: '#8A8398',
          light: '#A9A4B5',
          dark: '#6B6578',
        },
        success: {
          DEFAULT: '#2FAE60',
          light: '#4DC976',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
        'card': '20px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(31, 35, 64, 0.08)',
        'card-hover': '0 8px 32px rgba(31, 35, 64, 0.12)',
        'nav': '0 2px 16px rgba(31, 35, 64, 0.06)',
      },
      spacing: {
        'section': '80px',
        'section-lg': '120px',
      },
    },
  },
  plugins: [],
};
