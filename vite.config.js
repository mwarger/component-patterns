import checker from 'vite-plugin-checker';
import config from '@nxext/vite/plugins/vite';

const baseConfig = config();

const { defineConfig } = require('vite');
const path = require('path');
const { name, version } = require(path.resolve('./package.json'));

const defaultConfig = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    checker({
      typescript: true,
      // eslint: {
      // 	lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      // },
      overlay: {
        initialIsOpen: false,
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
  },
};

module.exports = defineConfig((cmd) => {
  const isProd = cmd.mode === 'production';
  const isDev = cmd.mode === 'development';
  const isBuild = cmd.command === 'build';

  let cdnPath = 'cdn-dev';

  if (version.indexOf('SNAPSHOT') === -1) cdnPath = 'cdn';

  if (isBuild) {
    console.log('isBuild');
    if (isProd) {
      console.log('isProd');
      return {
        ...defaultConfig,
        base: isDev
          ? '/'
          : `https://${cdnPath}.livevox.com/${name}/${version}/`,
      };
    }
  }

  return defaultConfig;
});
