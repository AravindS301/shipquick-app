const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "shipquick-backend" });
});

app.get("/orders", (req, res) => {
  res.json([
    { orderId: "ORD001", item: "Laptop", status: "Placed" },
    { orderId: "ORD002", item: "Mobile", status: "Shipped" }
  ]);
});

app.get("/tracking", (req, res) => {
  res.json({
    trackingId: "TRK12345",
    status: "In Transit",
    location: "Chennai"
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
