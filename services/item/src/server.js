import initializeServer from "@app/server";
import config from "./config";

initializeServer({
  service: "Item service",
  database: true,
  config,
});
