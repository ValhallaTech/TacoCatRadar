// ESLint 9+ Flat Config
import js from '@eslint/js';
import globals from 'globals';

export default [
    // Recommended rules
    js.configs.recommended,
    
    // Global settings
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            }
        },
        
        // Only lint YOUR custom JavaScript files
        files: ['Scripts/Palindrome.js', 'Scripts/DarkModeToggle.js', 'Scripts/CodeDisplay.js'],
        
        // Custom rules
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'semi': ['error', 'always'],
            'quotes': ['warn', 'single', { 'avoidEscape': true }],
        }
    },
    
    // Ignore patterns - DO NOT LINT VENDOR FILES
    {
        ignores: [
            'dist/**',
            '.parcel-cache/**',
            'node_modules/**',
            'Content/**',
            'Scripts/bootstrap*.js',
            'Scripts/jquery*.js',
            'Scripts/popper*.js',
            'Scripts/sweetalert*.js',
            'Scripts/confetti*.js',
            'Scripts/esm/**',
            'Scripts/src/**',
            'Scripts/umd/**',
        ]
    }
];
