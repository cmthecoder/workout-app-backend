const express = require('express')

require('dotenv').config()

// express app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, res.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome'})
})

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000')
})