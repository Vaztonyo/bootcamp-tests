describe('isFromBellville function', function(){
  it('should verify if regNumber is from Bellville', function(){
    assert.equal(true, isFromBellville('CY 523519'));
    // assert.equal(false, isFromBellville('CA 678519'));
  });
});
