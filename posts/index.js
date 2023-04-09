const express = require('express')
const cors = require('cors')

const app = express()

app.get('/posts', (req, res) => {
  res.send('get request test')
})

app.listen(3000, () => {
  console.log('posts service listening on 3000')
})
