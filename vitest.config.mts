import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // any combo of deps.inline / ssr.noExternal produces the same crash
  }
});