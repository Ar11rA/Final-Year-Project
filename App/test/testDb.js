const {displayDataOla, displayDataUber} = require('../dbFiles/dbCabs.js')
const { displayUser, insertUser, deleteUser, updateUser} = require('../dbFiles/dbUsers.js')
const chai = require('chai')
const expect = chai.expect
describe('when display uber function is called', function () {
  it('should return an array of objects when there is data in database',function(done){
    const users = displayDataUber()
    users.then((data)=>{
      expect(data.length).to.eqls(4) //4 uber types
      done()
    })
  })
})
describe('when display ola function is called', function () {
  it('should return an array of objects when there is data in database',function(done){
    const users = displayDataOla()
    users.then((data)=>{
      expect(data.length).to.eqls(6) //6 ola types
      done()
    })
  })
})
describe('when read function is called', function () {
  it('should return an array of objects when there is data in database',function(done){
    const users = displayUser()
    users.then((data)=>{
      expect(data instanceof Array).to.eqls(true)
      done()
    })
  })
})
describe('when insert function is called', function () {
  it('should return an id for new data in database',function(done){
    const users = insertUser('Siddhant Medewar','Password','Kalamandir Bus Stop','12-17-1994')
    users.then((data)=>{
      expect(typeof(data)).to.eqls('object')
      done()
    })
  })
  it('should return invalid for new data in database',function(done){
    const users = insertUser('Siddhant Medewar','Password','Kalamandir Bus Stop','asdsdsd')
    users.catch((data)=>{
      expect(data.message).to.eqls('invalid input syntax for type date: \"asdsdsd\"')
      done()
    })
  })
})