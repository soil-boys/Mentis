module.exports = {
    resolver: {
      extraNodeModules: require('node-libs-react-native'),
    },
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
};