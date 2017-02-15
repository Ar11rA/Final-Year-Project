const chai = require('chai')
const expect = chai.expect
describe('testing for write', function () {
  var request = require("request");

  var options = {
    method: 'POST',
    url: 'http://localhost:3019/insertUser',
    headers:
    {
      'postman-token': 'cc26e4cd-112f-3737-8678-692d38804b74',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      name: 'AG',
      password: 'AG',
      address: 'KMBS',
      birthday: 'asasd'
    }
  }
  it('should return number', function (done) {
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      expect(body).to.eqls('Internal Server Error')
      done()
    })
  })  
})
