const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const app = express();

app.use(
  BodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "belajar",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("terkoneksi ke database....");

  app.get("/", (req, res) => {
    const sql = "SELECT * FROM belajar1";
    db.query(sql, (err, result) => {
      const users = JSON.parse(JSON.stringify(result));
      res.render("index", { users: users, title: "Daftar produk pada database" });
    });
  });

  app.post("/tambah", (req, res) => {
    const insertSql = `INSERT INTO belajar1 (id, nama, harga, keterangan) VALUES (NULL, '${req.body.nama}', '${req.body.harga}', '${req.body.keterangan}')`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

app.listen(8000, () => {
  console.log("server ready..gan");
});
