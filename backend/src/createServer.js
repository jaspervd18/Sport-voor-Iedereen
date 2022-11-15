const Koa = require("koa");
const config = require("config");
const koaCors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const { initialiseerLogger, getLogger } = require("./core/logging");
const { initializeData, shutdownData } = require("./data");
const installRest = require("./rest");
const niv = require("node-input-validator");

// const NODE_ENV = config.get("env");
const CORS_ORIGINS = config.get("cors.origins");
const CORS_MAX_AGE = config.get("cors.maxAge");
const LOG_LEVEL = config.get("log.level");
const LOG_DISABLED = config.get("log.disabled");

module.exports = async function createServer() {
  initialiseerLogger({
    level: LOG_LEVEL,
    disabled: LOG_DISABLED,
  });

  await initializeData();

  const app = new Koa();

  // Add CORS
  app.use(
    koaCors({
      origin: (ctx) => {
        if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
          return ctx.request.header.origin;
        }
        return CORS_ORIGINS[0];
      },
      allowHeaders: ["Accept", "Content-Type", "Authorization"],
      maxAge: CORS_MAX_AGE,
    })
  );
  app.use(niv.koa());

  const logger = getLogger();

  app.use(bodyParser());

  installRest(app);

  return {
    getApp() {
      return app;
    },

    async start() {
      return new Promise((resolve) => {
        const port = process.env.PORT || 9000;
        app.listen(port);
        logger.info(`Server listening on http://localhost:${port}`);
        resolve();
      });
    },

    async stop() {
      app.removeAllListeners();
      await shutdownData();
      logger.info("Afsluiten...");
    },
  };
};
