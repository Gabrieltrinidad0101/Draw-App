import LinkList from "../LinkList/linkList.js"
const table = new Map()

class HashTable{
    constructor(){
        this.table = table
    }

    add(name){
        this.linkList = new LinkList() 
        table.set(table.size,{name,layers: this.linkList})
    }

    get(element){
        const result = table.get(element)
        if(!result) return false
        return result
    }

    remove(element){
        table.delete(element)
    }
}

export default HashTable
