const express = require('express')
const app = express()
const distance = require('google-distance')
const {displayDataOla, displayDataUber} = require('../dbFiles/dbCabs.js')
const { displayUser, insertUser, deleteUser, updateUser} = require('../dbFiles/dbUsers.js')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.post('/readOla', function (req, response) {
  let finalCost = []
  let srcAddress = req.body.autocomplete1
  let desAddress = req.body.autocomplete2
  var duration, dist
  distance.get(
    {
      origin: srcAddress,
      destination: desAddress
    },
    function (err, data) {
      if (err) return console.log(err)
      duration = parseFloat(data.duration)
      dist = parseFloat(data.distance)
      const disp = displayDataOla()
      disp.then((tasks) => {
        tasks.forEach((element, index) => {
          let fc = element.basefare + (dist * element.fareperkm) + (duration * element.farepermin)
          let fcobj = { 'type': element.cabtype, 'cost': fc }
          finalCost[index] = fcobj
        })
        response.send(finalCost)
      })
    })
})

app.post('/readUber', function (req, response) {
  let finalCost = []
  let srcAddress = req.body.autocomplete1
  let desAddress = req.body.autocomplete2
  var duration, dist
  distance.get(
    {
      origin: srcAddress,
      destination: desAddress
    },
    function (err, data) {
      if (err) return console.log(err)
      duration = parseFloat(data.duration)
      dist = parseFloat(data.distance)
      const disp = displayDataUber()
      disp.then((tasks) => {
        tasks.forEach((element, index) => {
          let fc = element.basefare + (dist * element.fareperkm) + (duration * element.farepermin)
          let fcobj = { 'type': element.cabtype, 'cost': fc }
          finalCost[index] = fcobj
        })
        response.send(finalCost)
      })
    })
})
app.get('/getUsers', (request, response) => {
  const displayData = displayUser()
  displayData.then((users) => {
    response.send(users)
  })
})
app.post('/insertUser', (req, response) => {
  const name = req.body.name
  const password = req.body.password
  const addr = req.body.address
  const bday = req.body.birthday
  const insUser = insertUser(name, password, addr, bday)
  insUser.then((id) => {
    response.send(id)
  })
    .catch(() => {
      response.sendStatus(500)
    })
})
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const password = req.body.password
  const addr = req.body.address
  const bday = req.body.birthday
  const updUser = updateUser(id, name, password, addr, bday)
  updUser.then((id) => {
    res.send(id)
  })
    .catch(() => {
      res.sendStatus(500)
    })
})
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id
  const delUser = deleteUser(id)
  delUser.then((id) => {
    res.send(id)
  })
    .catch(() => {
      res.sendStatus(500)
    })
})
app.listen(3019)
