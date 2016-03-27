var a = 3
var b = 5
cal()

function cal () {
  return a + b
}

var assert = require('assert')
describe('check calculation', function () {
  describe('cal()', function () {
    it('should return 8', function () {
      assert.equal(cal(), 8)
    })
  })
})
