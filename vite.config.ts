import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    base: '/'
  }
  if (command !== 'serve') {
    config.base = '/fe-millionaire/'
  }

  return config
});
