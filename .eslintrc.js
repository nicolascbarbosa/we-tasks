module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "es6": true
    },
    "rules": {
        "strict": 0,     
        "comma-dangle": 0,
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0
    },
    "globals": {
        "document": false
    }
};