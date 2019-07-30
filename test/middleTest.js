const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [1] ==> []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [1, 2, 3] ==> 2", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [1, 2, 3, 4, 5, 6] ==> [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
});
