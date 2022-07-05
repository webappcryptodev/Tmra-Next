const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

/**
 * Inject vars prefixed with NEXT_PUBLIC_
 * Ref: https://github.com/storybookjs/storybook/issues/12270
 * Ref: https://github.com/storybookjs/storybook/issues/17336
 */
const injectVars = Object.keys(process.env).reduce((c, key) => {
  if (/^NEXT_PUBLIC_/.test(key)) {
    c[`process.env.${key}`] = JSON.stringify(process.env[key]);
  }
  return c;
}, {});

function injectEnv(definitions) {
  const env = 'process.env';
  if (!definitions[env]) {
    return {
      ...definitions,
      [env]: JSON.stringify(
        Object.fromEntries(
          Object.entries(definitions)
            .filter(([key]) => key.startsWith(env))
            .map(([key, value]) => [key.substring(env.length + 1), JSON.parse(value)]),
        ),
      ),
    };
  }
  return definitions;
}

module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    'storybook-react-i18next',
    'storybook-addon-material-ui5',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    // https://www.notion.so/hendyirawan/Run-Storybook-and-Deploy-to-Cloudflare-Pages-70cf374070904bb388626260db7caf0b
    config.resolve.alias = {
      ...config.resolve.alias,
      'next-i18next': 'react-i18next',
      'next/config': 'src/utils/react-scripts-config',
    };

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.plugins = config.plugins.reduce((c, plugin) => {
      if (plugin instanceof webpack.DefinePlugin) {
        return [
          ...c,
          new webpack.DefinePlugin(
            injectEnv({
              ...plugin.definitions,
              ...injectVars,
            }),
          ),
        ];
      }
      return [...c, plugin];
    }, []);

    return config;
  },
};
