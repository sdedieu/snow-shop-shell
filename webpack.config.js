const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      // name: "shell",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      remotes: {
        sales: "http://localhost:4201/remoteEntry.js",
        crosscountry: `promise new Promise(resolve => {
              const script = document.createElement('script')
              script.src = 'http://localhost:4202/remoteEntry.js'
              script.onload = () => {
                resolve(window['crosscountry'])
              }
              document.head.appendChild(script);
            })
            `,
            downhill: `promise new Promise(resolve => {
              const script = document.createElement('script')
              script.src = 'http://localhost:4203/remoteEntry.js'
              script.onload = () => {
                resolve(window['downhill'])
              }
              document.head.appendChild(script);
            })
            `,
            snowboard: `promise new Promise(resolve => {
              const script = document.createElement('script')
              script.src = 'http://localhost:4204/remoteEntry.js'
              script.onload = () => {
                resolve(window['snowboard'])
              }
              document.head.appendChild(script);
            })
            `,
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
