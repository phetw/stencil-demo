import { Config } from "@stencil/core";

export const config: Config = {
  globalStyle: "src/global/css/app.css",
  outputTargets: [
    {
      dir:"docs"
      type: "www",
      serviceWorker: {
        unregister: true
      },
      baseUrl: "https://app.url/",
      prerenderConfig: "./prerender.config.js"
    }
  ]
};
