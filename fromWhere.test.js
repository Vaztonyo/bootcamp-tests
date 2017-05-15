describe('from where function', function(){
  it('should return from where a certain reg number is', function(){
    assert.equal('Bellville', fromWhere('CY 2309 89736'));
  });
  it('should return from where a certain reg number is', function(){
    assert.equal('Cape Town', fromWhere('CA 3297 13664'));
  });
  it('should return from where a certain reg number is', function(){
    assert.equal('Paarl', fromWhere('CJ 321 098467'));
  });
  it('should return from where a certain reg number is', function(){
    assert.equal('Some other place!', fromWhere('LM 983 9438 GP'));
  });
});

// describe('from where function', function(){
// });
//
//
//
// describe('from where function', function(){
// });
