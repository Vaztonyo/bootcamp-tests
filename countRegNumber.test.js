describe('the countRegNumber function', function(){
  it('should count how much reg numbers there are', function(){
    assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
  });
});
