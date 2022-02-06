import Config from "../config.js"
class LineWidth{
    constructor(){
        this.range = document.getElementById("rangeWidthLine")

        //class
        this.config = new Config();
        this.range.value = this.config.getValue("lineWidth")
        this.range.addEventListener("input",_=>this.updateWidth())
    }

    updateWidth(){
        const width = this.range.value
        this.config.setValue("lineWidth",parseInt(width))
    }

}


export default LineWidth;