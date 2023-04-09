const express = require("express");

const cors = require("cors");

const mysql = require("mysql");


const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "library"
})
app.get("/", (req, res) => {
	const sql = "SELECT * FROM student";
	db.query(sql, (err, data) => {
		if (err) return res.json("Error hoise user get korte");
		return res.json(data);
	});
});
app.get("/books", (req, res) => {
	const sql = "SELECT * FROM book";
	db.query(sql, (err, data) => {
		if (err) return res.json("Error hoise book get korte");
		return res.json(data);
	});
});
app.post('/create', (req, res) => {
	const sql = "INSERT INTO student (id,name,fine) VALUES (?)";
	const values = [req.body.id, req.body.name,req.body.fine]
     db.query(sql, [values], (err, data) => {
	if (err){ 
		return res.json(err);
	}else{
		return res.json(data);
	}
	})
})
app.post('/books/create', (req, res) => {
	const sql = "INSERT INTO book (id,name,author,semester,count) VALUES (?)";
	const values = [req.body.id, req.body.name,req.body.author,req.body.semester,req.body.count]
     db.query(sql, [values], (err, data) => {
	if (err){ 
		return res.json(err);
	}else{
		return res.json(data);
	}
	})
})
app.put('/update/:id', (req, res) => {
	const sql = "update student set name = ?,fine= ? where id = ?";
	const values = [req.body.name,req.body.fine]
	const id = req.params.id;
	db.query(sql, [...values, id], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	})
})
app.put('/books/update/:id', (req, res) => {
	const sql = "update book set name = ?,author= ?,semester= ?,count= ? where id = ?";
	const values = [req.body.name,req.body.author,req.body.semester,req.body.count]
	const id = req.params.id;
	db.query(sql, [...values, id], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	})
})
app.delete('/student/:id', (req, res) => {
	const sql = "DELETE FROM student WHERE id = ?";
	const id = req.params.id;
	db.query(sql, [id], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	})
})
app.delete('/books/:id', (req, res) => {
	const sql = "DELETE FROM book WHERE id = ?";
	const id = req.params.id;
	db.query(sql, [id], (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	})
})
app.listen(5000, () => {
	console.log("listening");
})