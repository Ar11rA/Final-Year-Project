const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://aritraaritra:@localhost:5432/finalproject')

// function addToDb(description) {
//   let insertDb = sequelize.query(`insert into  values (\'${description}\',false) returning id`, { raw: true, type: 'insert' })
//   return insertDb
// }

function displayData() {
  const query = 'select * from oladetails order by id asc'
  const displayDb = sequelize.query(query, { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
  )
  return displayDb
}

// function updateDb(id, description, status) {
//   if (!description) {
//     const query = `update tasks set status = '${status}' where id = ${id} returning id `
//     return sequelize.query(query)
//   }
//   if (status===undefined) {
//     const query = `update tasks set description = '${description}' where id = ${id} returning id`
//     return sequelize.query(query)
//   }
//   const query = `update tasks set description = '${description}', status = '${status}' where id = ${id} returning id`
//   return sequelize.query(query)

// }

// function deleteFromDb(id) {
//   const query = `delete from tasks where id = ${id} returning id`
//   const destroy = sequelize.query(query)
//   return destroy
// }
// function updateDbAll(status) {
//   const query = `update tasks set status = '${status}'`
//   return sequelize.query(query)

// }

// module.exports = {
//   addToDb,
//   displayData,
//   updateDb,
//   deleteFromDb,
//   updateDbAll
// }

// const add = addToDb('new task 2')
// add.then(()=>{console.log('ok add')})
// const add1 = addToDb('new task 3')
// add1.then(()=>{console.log('ok add')})
// const upd = updateDb(1,'taskchange',true)
// upd.then(()=>console.log('ok upd'))
// upd.catch((err)=>console.log(err))
// const del = deleteFromDb(3)
//  del.then(()=>console.log('ok del'))
const display = displayData()
display.then((tasks)=>console.log(tasks))
