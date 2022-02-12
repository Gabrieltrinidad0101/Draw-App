import HashTable from "../hashTable/hashTable.js"
import Config from "../../config.js";
class CanvasLayers{
    constructor(canvas,ctx){
        this.canvas = canvas
        this.ctx = ctx
        this.layers = new HashTable()
        this.config = new Config()
        this.config.setValue("mainCanvas",this.canvas)
        this.config.setValue("mainCtx",this.ctx)
        this.#render()
    }

    #Layer(){
        this.newLayer = document.createElement('canvas');
        this.newLayer.width = this.canvas.width;
        this.newLayer.height = this.canvas.height;
        this.newCtx = this.newLayer.getContext('2d');
        this.config.setValue("canvas",this.newLayer)
        this.config.setValue("ctx",this.newCtx)
        return {ctx:this.newCtx,canvas: this.newLayer}
    }

    createNewLayer(name){
        this.config.setValue("currentLayerId",this.layers.table.size)
        this.layers.add(name)
    }

    createNewSubLayer(){
        const currentLayerId = this.config.getValue("currentLayerId")
        const subLayers = this.layers.get(currentLayerId)
        const layer = this.#Layer()
        this.config.setValue("currentSubLayerId",subLayers.layers.size)
        subLayers.layers.add(layer)
    }

    #render(){
        const loop = setInterval(_=>{
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
            for(let i = 0; i < this.layers.table.size; i++){
                const subLayer = this.layers.get(i)
                subLayer.layers.traverse(currentLayer=>{
                    const canvas = currentLayer.canvas
                    this.ctx.drawImage(canvas,0,0)
                })
            }
        },100)
    }

    addSubLayer(id,name){
        const layer = this.layers.get(id)
        layer.add(name)
    }
}

export default CanvasLayers
