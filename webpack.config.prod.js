const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
});
