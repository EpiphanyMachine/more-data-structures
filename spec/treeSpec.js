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

  it("should link to a parent for each child node", function() {
    expect(tree.addChild('high1').parent).toEqual(tree);
    expect(tree.addChild('high2').parent).toEqual(tree);
    expect(tree.children[0].addChild('mid1').parent).toEqual(tree.children[0]);
    expect(tree.children[0].addChild('mid2').parent).toEqual(tree.children[0]);
  });

  it("should have contains return true if a value is contained in the tree", function() {
    tree.addChild('high1');
    tree.addChild('high2');
    tree.children[0].addChild('mid1');
    tree.children[0].addChild('mid2');
    expect(tree.contains('mid2')).toEqual(true);
    expect(tree.contains('sdsf')).toEqual(false);
  });

  it("should remove a child from the children index on removeFromParent", function() {
    tree.addChild('high1');
    tree.addChild('high2');
    tree.children[0].addChild('mid1');
    tree.children[0].addChild('mid2');
    tree.children[0].removeFromParent();
    expect(tree.contains('high1')).toEqual(false);
    expect(tree.contains('mid2')).toEqual(false);
    expect(tree.children[0].value).toEqual('high2');
  });

  it("should not link a removed child to its old parent", function() {
    tree.addChild('high1');
    tree.addChild('high2');
    tree.children[0].addChild('mid1');
    tree.children[0].addChild('mid2');
    subtree = tree.children[0].removeFromParent();
    expect(subtree.parent).toEqual(null);
  });

  it("should traverse to each node in the tree", function() {
    tree.addChild('high1');
    tree.addChild('high2');
    tree.children[0].addChild('mid1');
    tree.children[0].addChild('mid2');
    var count = 0;
    tree.traverse(function(){
      count++;
    });
    expect(count).toEqual(5);
  });

  // Add more tests here to test the functionality of tree.
});