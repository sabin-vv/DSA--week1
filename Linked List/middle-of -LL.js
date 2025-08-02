
function middle(head){

    let middle = head
    let end = head
    while(end && end.next){
        middle = middle.next
        end = end.next.next
    }
    return middle.val
}