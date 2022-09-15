const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = app.listen(PORT, () => {
  console.log("servidor levantado en el puerto " + server.address().port);
});

server.on("error", (error) => console.log(`hubo un error ${error}`));
const personas = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("formulario", { personas });
});

app.post("/personas", (req, res) => {
  console.log(req.body);
  personas.push(req.body);
  res.render("formulario", { personas });
});
