import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port && 3000,
        open: true,
        // нужно для того чтобы наш сервер понимал что это приложение SPA 
        historyApiFallback: true,
    }
}