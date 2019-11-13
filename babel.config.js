module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '<assets>': './src/assets',
            '<components>': './src/components',
            '<config>': './src/config',
            '<constants>': './src/constants',
            '<integrations>': './src/integrations',
            '<navigation>': './src/navigation',
            '<screens>': './src/screens',
            '<services>': './src/services',
            '<state>': './src/state',
            '<utils>': './src/utils'
          }
        }
      ]
    ]
  };
};
