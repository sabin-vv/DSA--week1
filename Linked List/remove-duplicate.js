
function duplicateRemove(head) {
    let node = head
    while (node) {
        let prev = node
        let curr = node.next
        while (curr) {
            if (node.val === curr.val) {
                prev.next = curr.next
                curr = prev.next
            } else {
                prev = curr
                curr = curr.next
            }
        }
        node = node.next
    }
}

function duplicate(head){
    if(!head) return

    let node = head
    let curr = node
    let next = node.next
    while(curr && curr.next){
        if(curr.val === next.val){
            curr.next = next.next
            next = curr.next
            this.size--
        }else{
            curr = next
            next =next.next
        }
    }
}