import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";
import { Configuration } from "mini-css-extract-plugin";

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {

    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}