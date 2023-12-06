const { createCanvas } = require("canvas");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const canvas = createCanvas(1000, 200);
  const ctx = canvas.getContext("2d");
  ctx.font = "30px Impact";
  ctx.rotate(0.1);
  ctx.fillText("Awesome!", 50, 100);

  // Draw line under text
  var text = ctx.measureText("Awesome!");
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + text.width, 102);
  ctx.stroke();
  // console.log('<img src="' + canvas.toDataURL() + '" />');

  res.writeHead(200, {
    "Content-Type": "image/png",
  });

  res.end(canvas.toBuffer("image/png"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
