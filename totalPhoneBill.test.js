describe('the total phone bill function', function(){
  it('should return the total bill for phone usage', function(){
    assert.equal(7.45, totalPhoneBill('call,sms,call,sms,sms'));
  });
  it('should return the total bill for phone usage', function(){
    assert.equal(3.25, totalPhoneBill('sms,sms,sms,sms,sms'));
  });
});
