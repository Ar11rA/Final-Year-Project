const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const recommendUser = require('../algorithms/CollaborativeFilteringNode/recommendUser')
const app = express()
app.use(session({
  secret: 'ssshhhhh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: false
  }
}))
app.use(cookieParser())
app.set('view engine', 'ejs')
const distance = require('google-distance')
const { displayDataOla, displayDataUber } = require('../dbFiles/dbCabs.js')
const { displayUser, findUser, insertUser, deleteUser, updateUser } = require('../dbFiles/dbUsers.js')
var sess
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  sess = req.session
  console.log('sess', req.session)
  if (sess.email) {
    res.redirect('/home')
  }
  else {
    res.render('index.html')
  }
})
app.post('/login', function (req, res) {
  sess = req.session
  const email = req.body.email
  const password = req.body.password
  const getUser = findUser(email, password)
  getUser.then((response) => {
    if (response.length === 1) {
      req.session.email = req.body.email
      console.log('3', req.session)
      res.send('Done')
    }
    else
      res.send('Failed')
  })
})
app.get('/home', function (req, res) {
  console.log(req.session)
  if (req.session.email === undefined)
    res.sendFile('/Users/aritraaritra/Documents/FinalProject/backend/public/index.html')
  else{
    let recommendationUser = recommendUser(req.session.email)
    res.render('home', { user: req.session.email , recommendations: recommendationUser})
  }
})
app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/')
      console.log(req.session)
    }
  })

})

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
