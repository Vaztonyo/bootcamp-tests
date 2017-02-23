describe('regCheck function',  function(){
  it('should check if string is a reg number from location', function(){
    assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
  });
});

describe('regCheck function',  function(){
  it('should check if string is a reg number from location', function(){
    assert.equal(true, regCheck('DRT 128 L', 'L'));
  });
});

describe('regCheck function',  function(){
  it('should check if string is a reg number from location', function(){
    assert.equal(true, regCheck('BM 23 NV MP', 'MP'));
  });
});
