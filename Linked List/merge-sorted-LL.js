

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode(0)
    let head = newList.next
    let curr = newList
    while (list1 && list2) {
        if (list1.val === list2.val) {
            curr.next = list1
            curr.next.next = list2
            curr = curr.next.next
        } else if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    if (list1) curr.next = list1;
    if (list2) curr.next = list2;
    console.log(newList)
    return head
};