const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

// The path to the CesiumJS source code copied over for globe viewer
const cesiumSource = 'cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join("src", "assets"), to: "assets" },
        { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
        { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
        { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }
      ],
    }),
    new ModuleFederationPlugin({
        library: { type: "module" },
        
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
