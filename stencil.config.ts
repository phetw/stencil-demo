import { Config } from "@stencil/core";

export const config: Config = {
  globalStyle: "src/global/app.css",
  outputTargets: [
    {
      type: "www",
      dir: "public",
      serviceWorker: {
        unregister: true
      },
      copy: [{ src: "now.json", dest: "now.json" }],
      baseUrl: "https://app.url/",
      prerenderConfig: "./prerender.config.js"
    }
  ]
};
