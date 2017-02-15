var distance = require('google-distance')

distance.get(
  {
    origin: 'Marathahalli, Bengaluru, Karnataka',
    destination: 'Whitefield, Bengaluru, Karnataka'
  },
  function (err, data) {
    if (err) return console.log(err)
    console.log(parseInt(data.duration))
  })