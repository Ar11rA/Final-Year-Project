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
function displayUser() {
  const query = 'select * from users'
  const displayDb = sequelize.query(query, { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
  )
  return displayDb
}
function insertUser(name_,password_,address_,birthday_){
  const query='insert into users(name,password,address,birthday) values (:name,:password,:address,:birthday) returning id'
  return sequelize.query(query,{replacements:{name:name_,password:password_,address:address_,birthday:birthday_}})
}
function deleteUser(id){
  const query='delete from users where id=:id returning id'
  return sequelize.query(query,{replacements:{id:id}})
}
function updateUser(id,name,password,address,birthday){
  const query='update users set name=:name,password=:password,address=:address,birthday=:birthday where id=:id returning id'
  return sequelize.query(query,{replacements:{id:id,name:name,password:password,address:address,birthday:birthday}})
}

module.exports = {displayDataOla, displayDataUber,displayUser,insertUser, deleteUser, updateUser}
// const newUser = insertUser('Siddhant Medewar','Password','Kalamandir Bus Stop','sadasd')
// newUser.catch((data)=>console.log(data.message))
// const deletedUser = deleteUser(4)
// deletedUser.then((data)=>console.log(data))
// const updUser = updateUser(1,'Aritra Ghosh','Caljam667','Kalamandir Bus Stop, Marathahalli','02-02-1995')
// updUser.then((id)=>console.log(id))
