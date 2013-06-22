describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should be able to retrieve an inserted value", function() {
    debugger;
    hashTable.insert('one', 'hklsjdhfkljsdhf');
    hashTable.insert('hello', 'hjksdhfkjsdhfjkghsd');
    hashTable.insert('two', 'kjsdghfkjsdhf');
    hashTable.insert('sugar', 'whjklhfdskjh');
    hashTable.insert('paper', 'kldshfkjh');
    hashTable.insert('zero', 'kldsdfsdgshfkjh');
    hashTable.insert('monkey', 'dshfkjh');
    expect(hashTable.retrieve('paper')).toEqual('kldshfkjh');
    expect(hashTable.retrieve('one')).toEqual('hklsjdhfkljsdhf');
    expect(hashTable.retrieve('hello')).toEqual('hjksdhfkjsdhfjkghsd');
    expect(hashTable.retrieve('zero')).toEqual('kldsdfsdgshfkjh');
    expect(hashTable.retrieve('monkey')).toEqual('dshfkjh');
    expect(hashTable.retrieve('sugar')).toEqual('whjklhfdskjh');
    expect(hashTable.retrieve('two')).toEqual('kjsdghfkjsdhf');
  });

  it("should be able to remove a value", function() {
    hashTable.insert('one', 'hklsjdhfkljsdhf');
    hashTable.insert('hello', 'hjksdhfkjsdhfjkghsd');
    hashTable.insert('two', 'kjsdghfkjsdhf');
    hashTable.insert('sugar', 'whjklhfdskjh');
    hashTable.insert('paper', 'kldshfkjh');
    hashTable.insert('zero', 'kldsdfsdgshfkjh');
    hashTable.insert('monkey', 'dshfkjh');
    expect(hashTable.remove('paper')).toEqual('kldshfkjh');
    expect(hashTable.remove('one')).toEqual('hklsjdhfkljsdhf');
    expect(hashTable.remove('hello')).toEqual('hjksdhfkjsdhfjkghsd');
    expect(hashTable.remove('zero')).toEqual('kldsdfsdgshfkjh');
    expect(hashTable.remove('monkey')).toEqual('dshfkjh');
    expect(hashTable.remove('sugar')).toEqual('whjklhfdskjh');
    expect(hashTable.remove('two')).toEqual('kjsdghfkjsdhf');
  });

  it("should expand when >= 75% full", function() {
    hashTable.insert('one', 'hklsjdhfkljsdhf');
    expect(hashTable._limit).toEqual(4);
    hashTable.insert('hello', 'hjksdhfkjsdhfjkghsd');
    expect(hashTable._limit).toEqual(4);
    hashTable.insert('two', 'kjsdghfkjsdhf');
    expect(hashTable._limit).toEqual(4);
    hashTable.insert('sugar', 'whjklhfdskjh');
    expect(hashTable._limit).toEqual(4);
    hashTable.insert('paper', 'kldshfkjh');
    expect(hashTable._limit).toEqual(4);
    hashTable.insert('zero', 'kldsdfsdgshfkjh');
    expect(hashTable._limit).toEqual(4);
    hashTable.insert('monkey', 'dshfkjh');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('paper');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('one');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('hello');
    expect(hashTable._limit).toEqual(8);
  });

  it("should reduce under 25% full", function() {
    hashTable.insert('one', 'hklsjdhfkljsdhf');
    hashTable.insert('hello', 'hjksdhfkjsdhfjkghsd');
    hashTable.insert('two', 'kjsdghfkjsdhf');
    hashTable.insert('sugar', 'whjklhfdskjh');
    hashTable.insert('paper', 'kldshfkjh');
    hashTable.insert('zero', 'kldsdfsdgshfkjh');
    hashTable.insert('monkey', 'dshfkjh');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('paper');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('one');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('hello');
    expect(hashTable._limit).toEqual(8);
    hashTable.remove('zero');
    expect(hashTable._limit).toEqual(4);
    hashTable.remove('monkey');
    expect(hashTable._limit).toEqual(4);
    hashTable.remove('sugar');
    expect(hashTable._limit).toEqual(4);
    hashTable.remove('two');
    expect(hashTable._limit).toEqual(4);
  });

});