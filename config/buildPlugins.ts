
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import webpack, { DefinePlugin } from "webpack";

import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin, { Configuration } from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";


export function buildPlugins(options: BuildOptions): Configuration["plugins"] {

    const isProd = options.mode === "production"
    const isDev = options.mode === "development"


    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __ENV__: JSON.stringify(options.mode)
        })
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }))
    }
    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }


    return plugins

}