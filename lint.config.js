[1mdiff --git a/frontend/eslint.config.js b/frontend/eslint.config.js[m
[1mindex ea36dd3..0e20d43 100644[m
[1m--- a/frontend/eslint.config.js[m
[1m+++ b/frontend/eslint.config.js[m
[36m@@ -1,13 +1,13 @@[m
[31m-import js from '@eslint/js'[m
[31m-import globals from 'globals'[m
[31m-import reactHooks from 'eslint-plugin-react-hooks'[m
[31m-import reactRefresh from 'eslint-plugin-react-refresh'[m
[31m-import { defineConfig, globalIgnores } from 'eslint/config'[m
[32m+[m[32mimport js from "@eslint/js";[m
[32m+[m[32mimport globals from "globals";[m
[32m+[m[32mimport reactHooks from "eslint-plugin-react-hooks";[m
[32m+[m[32mimport reactRefresh from "eslint-plugin-react-refresh";[m
[32m+[m[32mimport { defineConfig, globalIgnores } from "eslint/config";[m
 [m
 export default defineConfig([[m
[31m-  globalIgnores(['dist']),[m
[32m+[m[32m  globalIgnores(["dist"]),[m
   {[m
[31m-    files: ['**/*.{js,jsx}'],[m
[32m+[m[32m    files: ["**/*.{js,jsx}"],[m
     extends: [[m
       js.configs.recommended,[m
       reactHooks.configs.flat.recommended,[m
[36m@@ -18,4 +18,4 @@[m [mexport default defineConfig([[m
       parserOptions: { ecmaFeatures: { jsx: true } },[m
     },[m
   },[m
[31m-])[m
[32m+[m[32m]);[m
