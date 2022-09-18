import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/products", (req, res) => {
  res.send("Obtaining products");
});

app.post("/products", (req, res) => {
  res.send("Creating products");
});

app.put("/products", (req, res) => {
  res.send("Updating product");
});

app.delete("/products", (req, res) => {
  res.send("Deleting product");
});

app.get("/products/:id", (req, res) => {
  res.send("Obtaining product");
});

app.listen(3000);
console.log(`server on port ${3000}`);
