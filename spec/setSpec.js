describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add values", function() {
    set.add('test1');
    expect(set._storage['test1']).toEqual('');
    expect(set._storage['othertest']).toEqual(undefined);
  });

  it("should should not allow duplicate values", function() {
    // not sure how to test this...
  });

  it("should return true only for contained values", function() {
    set.add('test1');
    expect(set.contains('test1')).toEqual(true);
    expect(set.contains('othertest')).toEqual(false);
  });

  it("should should not contain removed values", function() {
    set.add('test1');
    set.remove('test1');
    expect(set.contains('test1')).toEqual(false);
    expect(set._storage.hasOwnProperty('test1')).toEqual(false);
  });

});