import ButtonTool from "../../../components/buttonTool/buttonTool.js"
export default function squareButton(){
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "button",
        innerHTML: `<i class="far fa-square">`
    }
    return buttonTool.create(buttonJSON,"leftTools")
}