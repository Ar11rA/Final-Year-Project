const dbName = process.env.DEV_MODE === 'test' ? 'testdb' : 'finalproject'
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://aritraaritra:@localhost:5432/'+dbName)
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
