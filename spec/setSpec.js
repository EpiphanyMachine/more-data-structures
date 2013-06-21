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

  it("should add strings", function() {
    set.add('test1');
    expect(set._storage['"test1"']).toEqual('');
    expect(set._storage['othertest']).toEqual(undefined);
  });

  it("should add numbers", function() {
    set.add(1);
    expect(set._storage[1]).toEqual('');
    expect(set._storage[3]).toEqual(undefined);
  });

  it("should add objects", function() {
    set.add({a:1});
    expect(set._storage['{"a":1}']).toEqual('');
    expect(set._storage['{"b":1}']).toEqual(undefined);
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