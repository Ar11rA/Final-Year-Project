const express = require('express')
const app = express()
const {addToDb, displayData, updateDb, deleteFromDb, updateDbAll} = require('./databaseFunctions')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.get('/read', function (req, response) {
  const disp = displayData()
  disp.then((tasks) => {
    response.send(tasks)
  })
})
app.post('/write/:message', function (req, response) {
  const data = req.params.message
  if (!data) {
    response.sendStatus(500)
  }
  const addData = addToDb(data)
  addData.then((id) => response.send(id))
  addData.catch(() => response.sendStatus(500))
})
app.listen(3012)
