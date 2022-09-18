import express from "express";
import morgan from "morgan";

const app = express();
const products = [{ id: 1, name: "laptop", price: 300 }];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);

  res.send(newProduct);
});

app.put("/products", (req, res) => {
  res.send("Updating product");
});

app.delete("/products", (req, res) => {
  res.send("Deleting product");
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productRequested = products.find((item) => item.id === +req.params.id);

  if (!productRequested)
    return res.status(404).json({
      message: "Product not found.",
    });

  console.log(productRequested);
  res.json(productRequested);
});

app.listen(3000);
console.log(`server on port ${3000}`);
