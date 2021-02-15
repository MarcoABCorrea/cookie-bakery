const port = 3001;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", (req, res) => {
  const order = new Date().getTime();
  saveOrder({ order });
  res.status(200).send({ order });
});

app.listen(port, () => {
  console.log(`Bakery app listening at http://localhost:${port}`);
});

saveOrder = (order) => {
  const url = "mongodb://localhost:27017/";
  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    var db = client.db("bakery");
    db.collection("order").insertOne(order, (err, res) => {
      if (err) throw err;
      client.close();
    });
  });
};
