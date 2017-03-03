describe('find items over function', function(){
  it('should find items over treshold', function(){
    assert.deepEqual(findItemsOver(itemList, 25), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ]);
  });
  it('should find items over treshold', function(){
    assert.deepEqual(findItemsOver(itemList, 55), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ]);
  });
});
