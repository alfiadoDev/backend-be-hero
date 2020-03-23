const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    evento: "semana omnistack",
    aluno: "Alfiado"
  });
});

app.listen(3333);
