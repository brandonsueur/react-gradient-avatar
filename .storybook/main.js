module.exports = {
  stories: ["../src/*.stories.(ts|tsx|js|jsx)"],

  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};
