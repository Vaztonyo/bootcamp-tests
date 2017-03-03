describe('the yearsAgo function', function(){
  it('should return how many years ago that certain date was', function(){
    assert.equal(427, yearsAgo(new Date('1589-02-21')));
  });
  it('should return how many years ago that certain date was', function(){
    assert.equal(427, yearsAgo(new Date('1889-02-21')));
  });
});
