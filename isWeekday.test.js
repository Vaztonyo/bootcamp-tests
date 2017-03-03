describe('the isWeekday function', function(){
  it('should check if the day is a weekday', function(){
    assert.equal(true, isWeekday('Monday'));
  });
  it('should check if the day is a weekday', function(){
    assert.equal(true, isWeekday('August'));
  });
});
