const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "1.0.0";

app.get("/", (req, res) => {
  res.json({
    application: "docker-auto-deploy",
    version: VERSION,
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}`);
});
