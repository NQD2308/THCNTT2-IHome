var express = require("express");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.listen(1311, function () {
  console.log("Server is running ...");
});

//Firebase
app.get('/', function (req, res) {
res.send('Hello World');
})

//GET
const { db } = require("./config/admin");
app.get("/", async (req, res) => {
  const cRef = db.collection("sensors");
  try {
    cRef.get().then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(items);
      res.status(201).json(items);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
  // res.status(201).json(items);
});

//POST
app.post("/post", async (req, res) => {
    const { id, device,temperatute, humid} = req.body;
    console.log(req.body);
    // res.send('aa')
    var datatest = {
      id: id,
      device: device,
      humid: humid,
      temperature: temperatute,
      // atTime:atTime
    };
    console.log(datatest);
    const data = req.body;
    const docRef = db.collection("sensors").doc(`${id}`);
    docRef
      .set(data)
      .then(() => {
        console.log("Tài liệu đã được tạo thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi tạo tài liệu: ", error);
      });
    res.send("add successfully");
  });