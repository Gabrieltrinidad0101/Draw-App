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

    getById(id){
        return this.traverse(node=>{
            if(node.id === id)
                return node
        })

    }

    traverse(cb){
        let current = this.heap
        while(current){
            const result = cb(current)
            if(result) return result
            current = current.next
        }
    }

    
    
}


export default LinkList