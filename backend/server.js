const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pijarcamp"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM produk";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO produk (`nama_produk`, `keterangan`, `jumlah`, `harga`) VALUES (?)";
    const values = [
        req.body.nama_produk,
        req.body.keterangan,
        req.body.jumlah,
        req.body.harga
    ]
    console.log('req ==> ', req)
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "update produk set `nama_produk` = ?, `keterangan` = ?, `jumlah` = ?, `harga` = ? where ID = ?";
    const values = [
        req.body.nama_produk,
        req.body.keterangan,
        req.body.jumlah,
        req.body.harga
    ]
    const id = req.params.id;

    console.log('req update ==> ', req)
    
    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.delete('/remove/:id', (req, res) => {
    const sql = "DELETE FROM produk WHERE ID = ?";
    const id = req.params.id;
    
    db.query(sql, [id], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening");
})