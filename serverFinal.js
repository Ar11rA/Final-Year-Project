const express = require('express')
const app = express()
const distance = require('google-distance')
const {displayDataOla,displayDataUber} = require('./dbFinal')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())
app.post('/readOla', function (req, response) {
  let finalCost = [];
  let srcAddress = req.body.autocomplete1;
  let desAddress = req.body.autocomplete2;
  var duration, dist;
  distance.get(
    {
      origin: srcAddress,
      destination: desAddress
    },
    function (err, data) {
      if (err) return console.log(err)
      duration = parseFloat(data.duration);
      dist = parseFloat(data.distance);
      const disp = displayDataOla()
      disp.then((tasks) => {
        tasks.forEach((element, index) => {
          let fc = element.basefare + (dist * element.fareperkm) + (duration * element.farepermin);
          let fcobj = {"type":element.cabtype,"cost":fc}
          finalCost[index] = fcobj;
        })
        response.send(finalCost)
      })
    })
})

app.post('/readUber', function (req, response) {
  let finalCost = [];
  let srcAddress = req.body.autocomplete1;
  let desAddress = req.body.autocomplete2;
  var duration, dist;
  distance.get(
    {
      origin: srcAddress,
      destination: desAddress
    },
    function (err, data) {
      if (err) return console.log(err)
      duration = parseFloat(data.duration);
      dist = parseFloat(data.distance);
      const disp = displayDataUber()
      disp.then((tasks) => {
        tasks.forEach((element, index) => {
          let fc = element.basefare + (dist * element.fareperkm) + (duration * element.farepermin);
          let fcobj = {"type":element.cabtype,"cost":fc}
          finalCost[index] = fcobj;
        })
        response.send(finalCost)
      })
    })
})
app.listen(3019)
