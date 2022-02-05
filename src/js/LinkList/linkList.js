class Node{
    constructor(value,next=null){
        this.value = value
        this.next = next
    }
}

class LinkList{
    constructor(){
        this.heap = null
    }

    add(value){
        if(!this.heap){
            this.heap = new Node(value)
            return 
        }
        const oldHead = this.heap
        this.heap = new Node(value)
        this.heap.next = oldHead
    }
}


export default LinkList