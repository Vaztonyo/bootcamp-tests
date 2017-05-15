describe('isFromBellville function', function(){
  it('should verify if regNumber is from Bellville', function(){
    assert.equal(true, isFromBellville('CY 523519'));
  });
  it('should verify if regNumber is from Bellville', function(){
    assert.equal(false, isFromBellville('GP 523519'));
  });
});
