describe('the countAllPaarl function', function(){
  it('should count all the reg numbers from Paarl', function(){
    assert.equal(4, countAllPaarl('CL 2315,CY 2394,CL 3198,CJ 2141,CY 3287,DR 12 TY GP,CJ 2875,DR 86 TY GP,DRT 366 L,DRT 122 L,CJ 4279,CJ 7649'));
  });
  it('should count all the reg numbers Paarl', function(){
    assert.equal(4, countAllPaarl('CL 2315,CY 2394,CL 3198,CG 2141,CY 3287,DR 12 TY GP,CG 2875,DR 86 TY GP,DRT 366 L,DRT 122 L,CG 4279,CG 7649'));
  });
});
