class TNode {
  public next : TNode
  public num : number
  constructor(num : number) {
    this.num = num
  }

  add(num : number) {
    let node : TNode = this;
    while(node.next) {
      if (!node.next) break;
      node = node.next;
    }
    node.next = new TNode(num);
  }

  toString() : string {
    let node : TNode = this;
    let str = '';
    do {
      str += node.num + ' '
      node = node.next;
    } while(node != null)

    return str
  }
}

export function fromArray(ar : number[]) : TNode {
  if (ar.length === 0) return null;
  let root = new TNode(ar[0]);
  let res = root;
  for (let i = 1; i < ar.length; i++) {
    res.add(ar[i]);
    res = res.next;
  }

  return root;
}

function tailToHead(root: TNode) : TNode {
  let curr = root;
  let nextCurr = curr.next;
  while(nextCurr && nextCurr.next !== undefined) {
    if (nextCurr.next === undefined) {
      break;
    }
    curr = curr.next;
    nextCurr = nextCurr.next;
  }

  console.log('==', curr.num, nextCurr.num);
  curr.next = null;
  nextCurr.next = root;
  return nextCurr;
}

// 1 2 3 4 5
// 2 3 4 5 1
// 3 4 5 1 2
export function rotate(root : TNode, d : number) : TNode {
  const bag : TNode[] = [];
  let curr = root;
  let lastOne = curr;
  while(curr) {
    bag.unshift(curr);
    lastOne = curr;
    curr = curr.next;
  }

  let i = 0;
  curr = lastOne;
  while(i < d) {
    let first = bag.pop();
    root = first.next;
    lastOne.next = first;
    lastOne = first;
    first.next = null;

    i++;
  }

  return root;
}
