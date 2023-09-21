import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@colors': path.resolve(__dirname, './src/sass/_color.scss'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@sass': path.resolve(__dirname, './src/sass/styles.scss'),
    },
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
});
