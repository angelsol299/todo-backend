import express from "express";
import { todos } from "./todos";
// Set up the express app
const app = express();
// get all todos
app.get("/api/v1/todos", (req, res) => {
  // tslint:disable-next-line:no-console
  console.log("RES MESASGE", res);

  res.send({
    success: "true",
    message: "todos retrieved successfully zzz",
    todos,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server running on port ${PORT}`);
});
