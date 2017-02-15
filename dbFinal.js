const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://aritraaritra:@localhost:5432/finalproject')
function displayDataOla() {
  const query = 'select * from oladetails'
  const displayDb = sequelize.query(query, { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
  )
  return displayDb
}
function displayDataUber() {
  const query = 'select * from uberdetails'
  const displayDb = sequelize.query(query, { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
  )
  return displayDb
}

 module.exports = {displayDataOla, displayDataUber}

