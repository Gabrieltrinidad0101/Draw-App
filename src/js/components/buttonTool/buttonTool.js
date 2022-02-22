import {error} from "../../components/modals/alerts/alerts.js"
class ButtonTool{
    create(button,windowId){
        const window = document.querySelector(`.${windowId}`)
        if(!window) return error("Error find Id",`it can find the window ${windowId}`)
        const newButton = this.#newButton(button)
        window.appendChild(newButton)
        return newButton
    }

    #newButton(button){
        const newButton = document.createElement(button.tag)
        for(const key of Object.keys(button).splice(1)){
            newButton[key] = button[key]
        }
        return newButton
    }
}

export default ButtonTool