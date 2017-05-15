describe('the isWeekday function', function(){
  it('should check if the day is a weekday', function(){
    assert.equal(true, isWeekday('Monday'));
  });
  it('should return false if value is not a weekday', function(){
    assert.equal(false, isWeekday('August'));
  });
});
