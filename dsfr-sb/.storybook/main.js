/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: ['../*.mdx', '../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/theming',
    '@storybook/addon-themes',
    '@whitespace/storybook-addon-html',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
        outline: false,
        grid: false,
        viewport: true,
      },
    }
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ["./static", { from: "../../dist", to: "dist" }, { from: "../../tool/example/img", to: "img" }],
};

export default config;
