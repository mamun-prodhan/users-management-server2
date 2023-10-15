const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Sabnoor", email: "sabnoor@gmail.com" },
  { id: 3, name: "Sokina", email: "sokina@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("User server is running successfully");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hiting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
