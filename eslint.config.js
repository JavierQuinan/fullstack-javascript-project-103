import globals from 'globals';
import pluginJS from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  },
  pluginJS.configs.recommended,
];