const express = require("express");
const cors = require("cors");
const Pizza = require("./models/pizzaModel");
const app = express();
const db = require("./db.js");
const userRoute = require("./routes/userRoute");
const pizzaRoute = require("./routes/pizzaRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use(express.json());
app.use(cors());

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

app.get("/", (req, res) => {
  res.send("server working🔥");
});
app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port🔥 ${port}`));
