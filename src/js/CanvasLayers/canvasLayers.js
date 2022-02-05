import HashTable from "../hashTable/hashTable.js"

class CanvasLayers{
    constructor(){
        //html
        this.containerCanvas = document.querySelector(".containerCanvas");
        this.canvas = document.getElementById("canvas")
        this.ctx =  this.canvas.getContext("2d")

        this.canvas.width = this.containerCanvas.clientWidth
        this.canvas.height = this.containerCanvas.clientHeight

        this.layers = new HashTable()
    }

    #Layer(){
        this.Canvas = document.createElement('canvas');
        this.Ctx = canvas.getContext('2d');
        let a = 0
        this.Ctx.fillStyle = 'blue';
        this.Ctx.fillRect(a += 100,50,150,150);
        return {ctx:this.Ctx,canvas: this.Canvas}
    }

    createNewLayer(name){
        const newLayer = this.#Layer()
        this.#insertIntoMainCanvas()
        this.layers.add(name,newLayer)
        return newLayer
    }

    #insertIntoMainCanvas(){
        setInterval(_=>{
            this.ctx.drawImage(this.Canvas, 0, 0, this.canvas.width, this.canvas.width);
        },500)
    }

    addSubLayer(id,name){
        const layer = this.layers.get(id)
        layer.add(name)
    }
}

export default CanvasLayers
