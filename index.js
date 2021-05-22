const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());

const serve_html = `${__dirname}/public/`;

app.get("/", (req, res) => {
  res.sendFile(serve_html + "index.html");
});

const PORT = 3333 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
