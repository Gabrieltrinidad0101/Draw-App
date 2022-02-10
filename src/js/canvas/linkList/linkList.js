class Node{
    constructor(canvas,ctx,next=null){
        this.canvas = canvas
        this.ctx = ctx
        this.next = next
        this.id = 0
    }
}

class LinkList{
    constructor(){
        this.heap = this.tail = null
        this.size = 0
    }

    add({canvas,ctx}){
        this.size++
        if(!this.tail){
            const node = new Node(canvas,ctx)
            node.id = this.size
            this.heap  = node
            this.tail = node
            return 
        }
        const oldTail = this.tail
        this.tail = new Node(canvas,ctx)
        this.tail.id = this.size
        oldTail.next = this.tail
    }

    traverse(cb){
        let current = this.heap
        while(current){
            cb(current)
            current = current.next
        }
    }

    
    
}


export default LinkList