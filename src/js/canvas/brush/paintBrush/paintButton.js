import ButtonTool from "../../../components/buttonTool/buttonTool.js"
export default function paintButton(icon){
    if(!icon) alert("Error to insert icon") 
    const buttonTool = new ButtonTool()
    const buttonJSON = {
        tag: "button",
        innerHTML: icon ? icon : "Error"
    }
    return buttonTool.create(buttonJSON,"leftTools")
}