import ButtonTool from "../../components/buttonTool/buttonTool.js"
export default function mouseSelectorButton(){
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "button",
        innerHTML: `<i class="fas fa-mouse-pointer"></i>`
    }
    return buttonTool.create(buttonJSON,"leftTools")
}