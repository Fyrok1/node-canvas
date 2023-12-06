import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/image", (req, res) => {
  const { createCanvas } = require("canvas");
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


api.use("/api/", router);

export const handler = serverless(api);

// import { createCanvas } from "canvas";

// app.get("/", (req, res) => {
//   const canvas = createCanvas(1000, 200);
//   const ctx = canvas.getContext("2d");
//   ctx.font = "30px Impact";
//   ctx.rotate(0.1);
//   ctx.fillText("Awesome!", 50, 100);

//   // Draw line under text
//   var text = ctx.measureText("Awesome!");
//   ctx.strokeStyle = "rgba(0,0,0,0.5)";
//   ctx.beginPath();
//   ctx.lineTo(50, 102);
//   ctx.lineTo(50 + text.width, 102);
//   ctx.stroke();
//   // console.log('<img src="' + canvas.toDataURL() + '" />');

//   res.writeHead(200, {
//     "Content-Type": "image/png",
//   });

//   res.end(canvas.toBuffer("image/png"));
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
