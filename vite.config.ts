/// <reference types="vite-plugin-svgr/client" />

import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteAliases } from 'vite-aliases';

export default defineConfig({
  plugins: [react(), ViteAliases({ useConfig: false, prefix: '$' }) as unknown as Plugin],
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
  },
  base: '/graphql-and-mui/',
});
