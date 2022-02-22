import ButtonTool from "../../../components/buttonTool/buttonTool.js"
export default function lineButton(){
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "button",
        innerHTML: `\\`
    }
    return buttonTool.create(buttonJSON,"leftTools")
}