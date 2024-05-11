const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "ang15",
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
    new ModuleFederationPlugin({

        name: "ang15",
        library: { type: "module" },
        filename: "remoteEntry.js",
        exposes: {
            './web-components': './src/bootstrap.ts',
        },        
        
        // For hosts (please adjust)x
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        
          ...sharedMappings.getDescriptors()
        })
        
        
    }),
    sharedMappings.getPlugin()
  ],
};
