// import express, { Request, Response } from "express";

// import bodyParser from "body-parser";

// const PORT = 4000;
// const app = express();

// app.use(bodyParser.json());

// app.listen(PORT, () => {
//   console.log(`Server listening on port http://localhost:${PORT}`);
// });

import bodyParser from "body-parser";
import express from "express";
import todoRouter from "./routers/todos-router";
import cors from "cors";
const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
