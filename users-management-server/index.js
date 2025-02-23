const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
  { id: 1, name: "Shabana", email: "shabana@gmail.com" },
  { id: 2, name: "Bobita", email: "bobita@gmail.com" },
  { id: 3, name: "Kobita", email: "kobita@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server is Running!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");

  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
