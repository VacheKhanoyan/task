module.exports = {
    extends: "airbnb",
    plugins: ["react", "import"],
    parser: "babel-eslint",
    settings: {
      "import/parser": "babel-eslint",
      "import/resolve": {
        moduleDirectory: ["node_modules", "src"]
      },
      ecmaFeatures: {
        classes: true,
        jsx: true
      }
    },
    rules: {
      strict: 2,
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["BrowserSlider"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["noHref", "invalidHref", "preferButton"]
        }
      ]
    },
    env: {
      browser: true,
      node: true
    },
  
    globals: {
      document: true,
      foo: true,
      window: true
    }
  };
  