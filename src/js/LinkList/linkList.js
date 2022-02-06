class Node{
    constructor(value,next=null){
        this.value = value
        this.next = next
    }
}

class LinkList{
    constructor(){
        this.heap = this.tail = null
    }

    add(value){
        if(!this.tail){
            this.heap,this.tail = new Node(value)
            return 
        }
        const oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
        this.tail.prev = oldTail
    }

    
}


export default LinkList