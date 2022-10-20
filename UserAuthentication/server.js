const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const users = [
  {
    name: "username",
  },
];

app.use(express.json());
app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch (error) {
    res.status(500).send();
  }
});

app.get("/user/login", async (req, res) => {
    const user = users.find((user) => user.name === req.body.name);
    if (!user) {
        return res.status(400).send("cannot find user");
    }
    try {
        const x = await bcrypt.compare(req.body.password, user.password);
        if(x)
            res.status(200).send(user);
        else
        res.status(500).send("wrong password");
    } catch (error) {
        res.status(500).send("password");
    }
});

app.listen(5000);

//bcrypt.compare(req.body.password, user.password);   ->kinda gets the salt outta user.password and hashes the req.body.password then check if they are equal
