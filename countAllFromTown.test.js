describe('the count All from Town  function', function(){
  it('should count all reg numbers from Town', function(){
    assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
  });
  it('should count all reg numbers from Town', function(){
    assert.equal(3, countAllFromTown('CT 124,CY 567,CY 345, CJ 456,CY 341', 'CL'))
  })
});
