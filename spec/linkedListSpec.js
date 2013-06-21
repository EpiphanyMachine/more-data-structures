describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should not add an undefined node", function() {
    expect(linkedList.addToTail()).toEqual(undefined);
  });

  it("if a single node is added to tail, it should be set to head and tail", function() {
    linkedList.addToTail('one');
    expect(Object.keys(linkedList)).toContain("_head");
    expect(Object.keys(linkedList)).toContain("_tail");
  });

  it("if a single node is added to head, it should be set to head and tail", function() {
    linkedList.addToHead('one');
    expect(Object.keys(linkedList)).toContain("_head");
    expect(Object.keys(linkedList)).toContain("_tail");
  });

  it("should return the head on a removeHead", function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    expect(linkedList.removeHead()).toEqual('one');
    expect(linkedList.removeHead()).toEqual('two');
    expect(linkedList.removeHead()).toEqual('three');
  });

  it("should change link from next to head to null on removeHead", function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    expect(linkedList.removeHead()).toEqual('one');
    expect(linkedList._head.previous).toEqual(null);
  });

  it("should change link from previous to tail to null on removeTail", function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    expect(linkedList.removeTail()).toEqual('three');
    expect(linkedList._tail.next).toEqual(null);
  });

  it("should be able to add to head or tail", function() {
    linkedList.addToTail('two');
    linkedList.addToHead('one');
    linkedList.addToTail('three');
    expect(linkedList.removeHead()).toEqual('one');
    expect(linkedList.removeHead()).toEqual('two');
    expect(linkedList.removeHead()).toEqual('three');
  });

  it("should return the tail on a removeTail", function() {
    linkedList.addToTail('two');
    linkedList.addToHead('three');
    linkedList.addToTail('one');
    expect(linkedList.removeTail()).toEqual('one');
    expect(linkedList.removeTail()).toEqual('two');
    expect(linkedList.removeTail()).toEqual('three');
  });

  it("should remove head and tail when last node is removed", function() {
    expect(linkedList.removeHead()).toEqual(undefined);
    expect(linkedList.removeHead()).toEqual(undefined);
    expect(linkedList.hasOwnProperty('_head')).toEqual(false);
    expect(linkedList.hasOwnProperty('_tail')).toEqual(false);
    linkedList.addToTail('one');
    expect(linkedList.removeHead()).toEqual('one');
    expect(linkedList.removeHead()).toEqual(undefined);
    expect(linkedList.hasOwnProperty('_head')).toEqual(false);
    expect(linkedList.hasOwnProperty('_tail')).toEqual(false);
  });

  it("should return the correct values for contains", function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    linkedList.addToTail('four');
    linkedList.addToTail('one');
    expect(linkedList.contains('two')).toEqual(true);
    expect(linkedList.contains('sdd')).toEqual(false);
    expect(linkedList.contains('one')).toEqual(true);
    expect(linkedList.contains('four')).toEqual(true);
  });

});
