const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
  <style>
    body {
      margin:0; height:100vh; 
      background:#006a4e; 
      display:grid; place-items:center; 
      font-family:Arial;
    }
    h1 {
      color:#f42a41; 
      font-size:4rem; 
      text-shadow:0 0 20px white;
    }
  </style>
  <h1>BANGLADESH</h1>
`)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})