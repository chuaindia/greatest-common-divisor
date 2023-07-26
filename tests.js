const gcd = require('./greatest-common-divisor')
const assert = require('assert')

describe('Tests', function () {
  it('gcd should be a function.', function () {
    assert(typeof gcd === 'function')
  })
  it('gcd(24,36) should return a number.', function () {
    assert(typeof gcd(24, 36) === 'number')
  })
  it('gcd(24,36) should return 12.', function () {
    assert.strictEqual(gcd(24, 36), 12)
  })
  it('gcd(30,48) should return 6.', function () {
    assert.strictEqual(gcd(30, 48), 6)
  })
  it('gcd(10,15) should return 5.', function () {
    assert.strictEqual(gcd(10, 15), 5)
  })
  it('gcd(100,25) should return 25.', function () {
    assert.strictEqual(gcd(100, 25), 25)
  })
  it('gcd(13,250) should return 1.', function () {
    assert.strictEqual(gcd(13, 250), 1)
  })
  it('gcd(1300,250) should return 50.', function () {
    assert.strictEqual(gcd(1300, 250), 50)
  })
})
