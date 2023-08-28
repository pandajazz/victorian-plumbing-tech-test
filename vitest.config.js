import { defineConfig } from 'vite';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      watch: false,
      globals: true,
      setupFiles: './__tests__/config/setupTests.ts',
      environment: 'jsdom'
    }
  })
);
