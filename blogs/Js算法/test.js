function LinkNode (val) {
  this.next = null;
  this.val = val;
}

function createLinkList (arr) {
  let head = new LinkNode(null);
  let curr = new LinkNode(null);

  head.next = curr;
  for (const item of arr) {
    const node = new LinkNode(item);
    curr.next = node;
    curr = curr.next;
  }
  return head.next;
}

function traverseLinkList (linkList) {
  let currNode = linkList.next;
  while (currNode) {
    currNode = currNode.next;
  }
}

const LinkList = createLinkList([1, 2, 3])
traverseLinkList(LinkList)

