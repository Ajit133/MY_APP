module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node":true,
      "jest":true,
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [   
  "react",
  "react-hooks"
  ],
  
   "rules": {
  "react/react-in-jsx-scope": 0,
  "react-hooks/rules-of-hooks": "error",
  "no-console": 0,
  "react/state-in-constructor": 0,
  "indent": 0,
  "linebreak-style": 0,
  "react/prop-types": 0,
  "react/display-name": [2],
  "jsx-a11y/click-events-have-key-events": 0,
   "ignoreTranspilerName" : true ,
  

  "react/jsx-filename-extension": [
    1,
    {
      "extensions": [
        ".js",
        ".jsx"
      ]
    }
  ],

}
}