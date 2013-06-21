describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree('top');
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add the first node to the top", function() {
    expect(tree.value).toEqual('top');
  });

  it("should add newChild nodes as children", function() {
    expect(tree.addChild('high1')).toEqual(tree.children[0]);
    expect(tree.addChild('high2')).toEqual(tree.children[1]);
    expect(tree.children[0].addChild('mid1')).toEqual(tree.children[0].children[0]);
    expect(tree.children[0].addChild('mid2')).toEqual(tree.children[0].children[1]);
  });

  it("should have contains return true if a value is contained in the tree", function() {
    tree.addChild('high1');
    tree.addChild('high2');
    tree.children[0].addChild('mid1');
    tree.children[0].addChild('mid2');
    expect(tree.contains('mid2')).toEqual(true);
    expect(tree.contains('sdsf')).toEqual(false);
  });

  // Add more tests here to test the functionality of tree.
});