import ButtonTool from "../../../components/buttonTool/buttonTool.js"
export default function fillerButton(){
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "button",
        innerHTML: `<i class="fas fa-fill-drip"></i>`
    }
    return buttonTool.create(buttonJSON,"leftTools")
}