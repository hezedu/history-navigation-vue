var assert = require('assert');
const vm = require('vm');
const fs = require('fs');
let source = fs.readFileSync('../src/util.js', 'utf-8');
source = source.replace(/export function ([\s\S]+?)\(/g, (mstr) => {
  const name = mstr.substring(mstr.lastIndexOf(' '), mstr.length - 1);
  return `function ${name}(`;

})
eval(source); // _cutOffAndPush
describe('Util', function() {

  describe('#_getTotalSteps', function() {
    it('total should eq 1', function() {
      const count = _getTotalSteps([], {key: 1, modalKey: 0}, {key: 2, modalKey: 0});
      assert.equal(count, 1);
    });
  });

  describe('#_getModalSteps', function() {
    it('step should eq 0', function() {
      const count = _getModalSteps([], {key: 1, modalKey: 0}, {key: 2, modalKey: 0});
      assert.equal(count, 0);
    });
    it('step should eq 1', function() {
      const count = _getModalSteps([[1, 1]], {key: 1, modalKey: 0}, {key: 2, modalKey: 0});
      assert.equal(count, 1);
    });
    it('step should eq 2', function() {
      const count = _getModalSteps([[1, 1]], {key: 1, modalKey: 0}, {key: 2, modalKey: 1});
      assert.equal(count, 2);
    });
    it('step should eq 2 too', function() {
      const count = _getModalSteps([[1, 1], [2, 2]], {key: 1, modalKey: 0}, {key: 2, modalKey: 1});
      assert.equal(count, 2);
    });
  });
  describe('#_findCrumbsIndex', function() {
    it('index should eq 0', function() {
      const index = _findCrumbsIndex([], 1);
      assert.equal(index, 0);
    });
    it('index should eq 1', function() {
      const index = _findCrumbsIndex([[0], [2]], 1);
      assert.equal(index, 1);
    });
    it('index should eq 1', function() {
      const index = _findCrumbsIndex([[0], [1]], 1);
      assert.equal(index, 1);
    });
  });
  describe('#_cutOffAndPush(arr, stateKey, modalCount)', function() {
    
    it('array length should eq 0', function() {
      const arr = [];
      _cutOffAndPush(arr, 1, 0)
      assert.equal(arr.length, 0);
    });
    it('array length should eq 1', function() {
      const arr = [];
      _cutOffAndPush(arr, 1, 1);
      assert.deepEqual(arr, [[1, 1]]);
    });
    it('array length should eq 0', function() {
      const arr = [[1, 1]];
      _cutOffAndPush(arr, 1, 0)
      assert.equal(arr.length, 0);
    });

    it('array length should eq 1', function() {
      const arr = [[1, 1], [2, 1], [3, 1]];
      _cutOffAndPush(arr, 2, 0);

      assert.deepEqual(arr, [[1, 1]]);
    });
    it('array length should eq 3', function() {
      const arr = [[1, 1], [2, 1]];
      _cutOffAndPush(arr, 3, 1);
      assert.deepEqual(arr.length, 3);
    });
  });
});