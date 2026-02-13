import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#2563EB',
        muted: '#E2E8F0',
        accent: '#ECFEFF'
      },
      backgroundImage: {
        'nature-gradient':
          'linear-gradient(135deg, rgba(15,118,110,0.08) 0%, rgba(37,99,235,0.08) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
