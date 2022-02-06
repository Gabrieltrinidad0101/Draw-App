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
            const node = new Node(value)
            this.heap  = node
            this.tail = node
            return 
        }
        const oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
    }

    
}


export default LinkList