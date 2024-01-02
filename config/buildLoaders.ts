import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';



export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {

    const isDev = options.mode === "development"

    // Изоляция стилей scss
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
            }
        }
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    // для работы с svr как с компонентом
    const svgrLoaders = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }


    const scssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    }

    const tsLoaders = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ],
    }

    return [
        assetsLoader,
        scssLoaders,
        tsLoaders,
        svgrLoaders
    ]
}