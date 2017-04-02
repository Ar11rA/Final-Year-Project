const dbName = process.env.DEV_MODE === 'test' ? 'testdb' : 'finalproject'
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://aritraaritra:@localhost:5432/' + dbName)
function displayUser() {
  const query = 'select * from users'
  const displayDb = sequelize.query(query, { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
  )
  return displayDb
}
function findUser(name, pass) {
  const query = `select * from users where name='${name}' and password='${pass}'`
  return sequelize.query(query, { replacements: ['active'], type: sequelize.QueryTypes.SELECT })
}
function insertUser(name_, password_, address_, birthday_) {
  const query = 'insert into users(name,password,address,birthday) values (:name,:password,:address,:birthday) returning id'
  return sequelize.query(query, { replacements: { name: name_, password: password_, address: address_, birthday: birthday_ } })
}
function deleteUser(id) {
  const query = 'delete from users where id=:id returning id'
  return sequelize.query(query, { replacements: { id: id } })
}
function updateUser(id, name, password, address, birthday) {
  const query = 'update users set name=:name,password=:password,address=:address,birthday=:birthday where id=:id returning id'
  return sequelize.query(query, { replacements: { id: id, name: name, password: password, address: address, birthday: birthday } })
}
module.exports = { displayUser, findUser, insertUser, deleteUser, updateUser }