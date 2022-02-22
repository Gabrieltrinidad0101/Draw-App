import ButtonTool from "../../../components/buttonTool/buttonTool.js";
export default function colorPickerButton(){
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "button",
        innerHTML: `<i class="fas fa-eye-dropper"></i>`
    }
    return buttonTool.create(buttonJSON,"leftTools")
}
