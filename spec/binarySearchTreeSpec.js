describe("binarySearchTree", function() {
  var tree;

  beforeEach(function() {
    tree = new BinarySearchTree(20);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(tree.insert).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect(tree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should sort values when adding", function() {
    expect(tree.value).toEqual(20);
    tree.insert(15);
    expect(tree.left.value).toEqual(15);
    tree.insert(25);
    expect(tree.right.value).toEqual(25);
    tree.insert(5);
    expect(tree.left.left.value).toEqual(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    expect(tree.left.left.right.left.left.left.value).toEqual(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    expect(tree.right.right.right.left.left.right.left.right.value).toEqual(34);
  });

  it("should return true if a contains is passed a value in the tree", function() {
    tree.insert(15);
    tree.insert(25);
    tree.insert(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    expect(tree.contains(30)).toEqual(true);
    expect(tree.contains(34)).toEqual(true);
    expect(tree.contains(20)).toEqual(true);
    expect(tree.contains(35)).toEqual(true);
    expect(tree.contains(11)).toEqual(true);
    expect(tree.contains(13)).toEqual(true);
    expect(tree.contains(45)).toEqual(true);
    expect(tree.contains(2)).toEqual(false);
    expect(tree.contains(22)).toEqual(false);
    expect(tree.contains(27)).toEqual(false);
    expect(tree.contains(16)).toEqual(false);
    expect(tree.contains(32)).toEqual(false);
  });
  // add more tests here to test the functionality of binarySearchTree
});