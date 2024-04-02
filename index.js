const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

const PORT = 8080;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(PORT, ()=>{
    console.log(`Server is Listening on Port : ${PORT}`);
})

app.post('/api/contact', (req, res) => {
    data = req.body
    console.log(req.body)
    fs.writeFile('./response.json', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
    console.log("Data has been written")
    res.status(200).json({message:"Recieved"})
    })
})