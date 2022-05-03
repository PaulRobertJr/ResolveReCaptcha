const express = require("express");
const app = express();
const port = 3000;

const { processReCaptcha } = require("./index.js");

app.get("/recaptcha", async (req, res) => {
  const token = await processReCaptcha();

  res.status(200).send({ token });
});

app.listen(port, () => {
  console.log(`Server Running in  port:${port}`);
});
