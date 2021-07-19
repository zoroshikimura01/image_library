const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const pool = mysql.createPool({
  user: "admin123456",
  host: "localhost",
  password: "son097230",
  database: "image_library"
});

app.get('', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err
    console.log(`connected as id ${connection.threadId}`)
    connection.query('SELECT * from image', (err, rows) => {
      connection.release();
      if(!err){
        res.send(rows)
      } else {
        res.send(err)
      }
    })
  })
})

app.post('', (req, res) => {
  pool.getConnection((err, connection) => {
    const params = req.body
    connection.query(`INSERT INTO favorite SET ?`, params, (err, rows) => {
      connection.release() // return the connection to pool
      if (!err) {
        res.send(err)
      } else {
        console.log("favorite add")
      }
      console.log(rows)
    })
  })
})

app.get('/favorite', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err
    console.log(`connected as id ${connection.threadId}`)
    connection.query('SELECT favorite.id, image.url, image.name from image, favorite WHERE favorite.image_id = image.id', (err, rows) => {
      connection.release();
      if(!err){
        res.send(rows)
      } else {
        res.send(err)
      }
    })
  })
})


app.delete('/:id', (req, res) => {
  pool.getConnection((err, connection) => {
      if(err) throw err
      connection.query('DELETE FROM favorite WHERE id = ?', [req.params.id], (err, rows) => {
          connection.release() // return the connection to pool
          if (!err) {
              res.send(`favorite with the record ID ${[req.params.id]} has been removed.`)
          } else {
              console.log(err)
          }
          console.log('The data from favorite table are: \n', rows)
      })
  })
});





app.listen(port, () => console.log(`Listening on port ${port}`))

