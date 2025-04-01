import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      setupFiles: './src/lib/util/setupTests',

      reporters: ['default'],
      coverage: {
        reporter: ['lcov'],
        reportsDirectory: '../../coverage/libs/pxweb2-ui',
        provider: 'istanbul',
      },
    },
  }),
);
