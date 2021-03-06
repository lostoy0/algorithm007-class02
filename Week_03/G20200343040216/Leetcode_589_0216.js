/**
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 方法1：递归的方法
/**
 * @param {Node} root
 * @return {number[]}
 */

function dfs(root, res) {
  if (!root) return res;
  for (var i = 0; i < root.children.length; i++) {
    dfs(root.children[i], res);
  }
  res.push(root.val);
}
var postorder = function(root) {
  var res = [];
  dfs(root, res);
  return res;
};

// 方法2： 迭代的方法

var postorderInLoop = function(root) {
  if (!root) return [];
  var res = [];
  var stack = [];

  stack.push(root);
  while (stack.length > 0) {
    var last = stack.pop();
    if (last) res.push(last.val);

    for (var i = 0; i < last.children.length; i++) {
      var child = last.children[i];
      if (child !== null) stack.push(child);
    }
  }

  return res.reverse();
};
