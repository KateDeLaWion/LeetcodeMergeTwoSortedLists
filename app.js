var mergeTwoLists = function(list1, list2) {
    let pointer=new ListNode(); // pointer becomes {"val":0,"next":null}
    let merge=pointer; // merge will copy pointer cumulatively, not repetitively
    while(list1 && list2){
        // to track the pointer grows shorter as the loop progresses, use the below console.log
        // console.log(JSON.stringify(pointer));
    if(list1.val<list2.val){
    pointer.next=list1;
    pointer=pointer.next; // pointer grows shorter as the loop progesses
    list1=list1.next;
    } else {
    pointer.next=list2;
    pointer=pointer.next; // pointer grows shorter as the loop progesses
    list2=list2.next;
    }
}
    if(list1){ //if list1 is longer than list2
    pointer.next=list1;
    }
    if(list2){ //if list2 is longer than list1
    pointer.next=list2;
    }
    return merge.next; //merge first val 0, the next contains the merged list
};