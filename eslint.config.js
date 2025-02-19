import globals from "globals";
import pluginJS from "@eslint/js";

export default [
  {
    languageOptions: { 
      globals: { 
        ...globals.node,  // Soporte para Node.js
        ...globals.jest    // Soporte para Jest
      } 
    }
  },
  pluginJS.configs.recommended,
];
