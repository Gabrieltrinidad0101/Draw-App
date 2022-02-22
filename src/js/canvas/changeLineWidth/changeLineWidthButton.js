import ButtonTool from "../../components/buttonTool/buttonTool.js"
export default function changeLineWidthButton(){
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "input",
        type: "range"
    }
    return buttonTool.create(buttonJSON,"rightTools")
}