import express from "express";
import morgan from "morgan";

const app = express();
const products = [{ id: 1, name: "laptop", price: 300 }];

app.use(morgan("dev"));
app.use(express.json());

// Get Method: All Products
app.get("/products", (req, res) => {
  res.send(products);
});

// Post Method: Create Products
app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);

  res.send(newProduct);
});

// Update Method
app.put("/products/:id", (req, res) => {
  const productRequested = products.find((item, i) => {
    if (item.id === +req.params.id) {
      products[i] = {
        ...item,
        ...req.body,
      };
      return true;
    }
    return false;
  });

  if (!productRequested)
    return res.status(404).json({
      message: "Product not found.",
    });
  7;

  res.send("Updating product");
});

// Delete Method
app.delete("/products/:id", (req, res) => {
  const productRequested = products.find((item, i) => {
    if (item.id === +req.params.id) {
      products.splice(i, 1);
      return true;
    }
    return false;
  });

  if (!productRequested)
    return res.status(404).json({
      message: "Product not found.",
    });

  res.send(products);
});

// Get Method: For single product
app.get("/products/:id", (req, res) => {
  const productRequested = products.find((item) => item.id === +req.params.id);

  if (!productRequested)
    return res.status(404).json({
      message: "Product not found.",
    });

  res.json(productRequested);
});

app.listen(3000);
console.log(`server on port ${3000}`);
