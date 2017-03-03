describe('find items over 20 function', function(){
  it('should find items over 20', function(){
    assert.deepEqual(findItemsOver20(itemList, 20), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ]);
  });
  it('should find items over 20', function(){
    assert.deepEqual(findItemsOver20(itemList, 86), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ]);
  });
});
