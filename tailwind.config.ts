import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'linear-gradient':
          'linear-gradient(rgba(0, 0, 0, 0) 0%, var(--black) 100%)',
        'linear-gradient-light':
          'linear-gradient(90deg, var(--light-black) 0%, var(--gray, --gray) 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.3rem',
          sm: '2rem',
          lg: '4rem',
          xl: '3.5rem',
          '2xl': '10rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
