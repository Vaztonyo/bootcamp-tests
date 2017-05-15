describe('the transport fee function', function(){
  it('should return the transport fee of a certain work shift', function(){
    assert.equal('R20', transportFee('morning'));
  });
  it('should return the transport fee of a certain work shift', function(){
    assert.equal('Nothing', transportFee('nightshift'));
  });
  it('should return the transport fee of a certain work shift', function(){
    assert.equal('R10', transportFee('afternoon'));
  });

});
