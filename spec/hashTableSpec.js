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

  // add more tests here to test the functionality of hashTable
});