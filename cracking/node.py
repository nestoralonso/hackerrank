from typing import List
from itertools import islice

class Node(object):
    def __init__(self, data = None, next_node = None):
        self.data = data
        self.next = next_node

    def _repr(self, node) -> str:
        if not node.next:
            return '{}|'.format(node.data)

        return '%s⟼%s' % (node.data, self._repr(node.next))

    def to_string(self):
        return self._repr(self)

    def __str__(self):
        ret = '%s->%s' % (self.data, 'None' if not self.next else self.next.data)
        return ret

def from_array(arr: List) -> Node:
    previous = Node(arr[0])
    root = previous
    for i, v in islice(enumerate(arr), 1, None):
        new_node = Node(arr[i])
        previous.next = new_node
        previous = new_node
        print(previous)

    return root

list_ = from_array([7, 14, 21, 28])
print(list_.to_string())
