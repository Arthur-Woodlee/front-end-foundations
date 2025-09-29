// This is the configuration file for Webpack.
// To build the application, Node.js executes the Webpack script.
// Webpack then loads and executes this config file to determine how to bundle your assets.
// By default, Webpack looks for a file named webpack.config.js in the project root.
// You can rename this file, but if you do, you must specify the new name using the --config flag.
// Example: "npx webpack --config custom-config.js"

// Node.js wraps each module in a function to isolate scope and inject helpers:
// (function (exports, require, module, __filename, __dirname) { ... })
//
// - exports: a shortcut to module.exports, used to expose functionality.
// - require: function to import other modules.
// - module: object representing the current module (includes exports).
// - __filename: absolute path to the current file.
// - __dirname: absolute path to the directory containing the current file.
//
// These are passed in automatically and scoped per file.
// __dirname is especially useful for resolving paths (e.g., output directory in Webpack). 

const path = require('path'); // Imports Node.js's built-in 'path' module to safely resolve and manipulate file system paths.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // (3rd Party plugin)Imports the HtmlWebpackPlugin, which generates an HTML file and automatically injects bundled JS and CSS assets.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// (3rd Party plugin)Imports the MiniCssExtractPlugin, which extracts CSS into separate .css files instead of injecting styles via JavaScript.

module.exports = { 
  // entry → dependency graph → bundle → plugin phase → HtmlWebpackPlugin injects → final HTML output
  // This object defines what the module "returns" when it's loaded via require().
  // Node.js wraps this file in a function and injects a module object.
  // Webpack calls require() on this file to retrieve the exported configuration.
  // The final value of module.exports is cached and used to drive the bundling process.
  mode: 'development',
  // Enable source maps for better debugging in browser DevTools.
  // Maps compiled code back to original source files.
  // Use 'source-map' for full fidelity in production or 'eval-cheap-module-source-map' for faster dev builds.
  devtool: 'source-map', 
  entry: {
    // This tells Webpack where to start building the dependency graph for each entry point.
    // Each entry point results in a separate bundle.
    index: './src/scripts/index.js', 
    about: './src/scripts/about.js',
  },
  output: {
    filename: '[name].[contenthash].js', // Names each output file using its entry name and a content-based hash for cache busting.
    path: path.resolve(__dirname, 'dist'), // Resolves the absolute path to the 'dist' folder for writing output files.
    clean: true, // Clears the output directory before each build to remove outdated files.
  },
  plugins: [
    // HtmlWebpackPlugin generates HTML files and injects the correct JS/CSS bundles.
    // Each instance handles one HTML file, using a specified template and chunk.
    // Without this plugin, you'd need to manually manage your HTML and asset references.
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      // 'chunks' limits which entry point bundles are injected into this HTML file.
      // Without it, all bundles are injected — which can break multi-page setups.
      chunks: ['about'],
    }),
    // Extracts CSS into separate files instead of injecting via JS.
    // '[name].[contenthash].css' enables cache busting per entry point.
    // Without this plugin, styles are injected at runtime via <style> tags.
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],

  module: {
    // This rule processes .scss files using a loader chain:
    // - sass-loader compiles SCSS to CSS
    // - css-loader resolves imports and URLs
    // - MiniCssExtractPlugin.loader extracts CSS into separate files
    // Loaders run right-to-left, transforming SCSS into emitted .css assets.
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    // Serve static files from the build directory during development.
    // This allows direct access to compiled HTML and assets.
    // Automatically open the browser when the dev server starts.
    // To specify a custom port (default is 8080), add:
    // define port: 5173 after open: true // or any available port number
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true, // Saves you from manually typing http://localhost:5173 or similar.
  },
};

// =======================
// 🔧 Additional Webpack Config Options
// =======================

// Enable Hot Module Replacement (HMR) for live updates without full reloads.
// devServer: { hot: true }

// Support client-side routing by redirecting 404s to index.html.
// devServer: { historyApiFallback: true }

// Clean the output directory before each build to avoid stale files.
// output: { clean: true }

// Customize asset filenames (e.g., images, fonts) for better structure.
// output: { assetModuleFilename: 'images/[name][ext][query]' }

// Split shared modules into separate bundles for better caching.
// optimization: { splitChunks: { chunks: 'all' } }

// Extract Webpack runtime into a single chunk to improve long-term caching.
// optimization: { runtimeChunk: 'single' }

// Define import path aliases to simplify deep relative paths.
// resolve: { alias: { '@components': path.resolve(__dirname, 'src/components') } }

// Allow omitting file extensions in import statements.
// resolve: { extensions: ['.js', '.json', '.scss'] }

// Reduce console noise during builds — helpful for onboarding clarity.
// stats: 'minimal' // or 'errors-only'

// Disable performance hints during development to avoid warnings.
// performance: { hints: false }

// Explicitly set the build mode — affects optimization and defaults.
// mode: 'development' // or 'production'

// Control source map generation for debugging.
// devtool: 'source-map' // or 'eval-cheap-module-source-map'