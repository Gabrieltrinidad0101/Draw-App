import GlobalVariables from "../../globalVariables.js"
class LineWidth{
    constructor(){
        this.range = document.getElementById("rangeWidthLine")

        //class
        this.globalVariables = new GlobalVariables();
        this.range.value = this.globalVariables.getValue("lineWidth")
        this.range.addEventListener("input",_=>this.updateWidth())
    }

    updateWidth(){
        const width = this.range.value
        this.globalVariables.setValue("lineWidth",parseInt(width))
    }

}


export default LineWidth;