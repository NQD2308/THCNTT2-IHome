const express = require('express')
const cors = require('cors')
const User = require('./config')
const { async } = require('@firebase/util')

const app =  express()
app.use(express.json())
app.use(cors())

app.get('/', async(req,res) => {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    res.send(list)
});
// app.get('/room1', async (req, res) => {
//     try {
//       // Lấy dữ liệu của document "room" trong collection "Sensor"
//       const snapshot = await User.doc("123 NY").get();
//       if (snapshot.exists) {
//         const roomData = snapshot.data();
//         res.json(roomData);
//       } else {
//         res.status(404).json({ error: "Document not found" });
//       }
//     } catch (error) {
//       console.error("Error getting document: ", error);
//       res.status(500).json({ error: "Server error" });
//     }
//   });

app.post('/create', async(req, res)=>{
    const data = req.body;
    console.log(data);
    // console.log("Data of Users ", data)
    await User.doc("123 NY").set(data);
    res.send({msg: "User added"});
})
// app.post('/create1', async(req, res)=>{
//     const data = req.body;
//     // console.log("Data of Users ", data)
//     await User.doc("123 NY").set(data);
//     res.send({msg: "Room1 updated successfully"});
// })

app.put('/update', async(req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.send({msg: "Updated"});
});

app.delete('/delete', async(req, res) => {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({msg: "Deleted"});
});

app.listen(1234, () => console.log("Port 1234"))