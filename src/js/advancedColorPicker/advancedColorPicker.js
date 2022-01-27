import Config from "../config.js"
class AdvanceColorPicker{
    constructor(){
        this.colorPicker = document.getElementById("advancedColorPicker")
        this.containerColorPicker = document.querySelector(".clr-field")
        this.config = new Config()

        //events
        this.colorPicker.addEventListener("input",_=>this.setColor(this.colorPicker.value))
        this.configPicker()
    }

    setColor(color){
        this.colorPicker.value = color
        this.containerColorPicker.style.color = color
        this.config.setValue("color",color)
    }

    getColor(){
        return this.colorPicker.getAttribute("value")
    }

    configPicker(){
        Coloris({
            theme: 'large',
            themeMode: 'dark',
            swatches: [
                '#264653',
                '#2a9d8f',
                '#e9c46a',
                '#f4a261',
                '#e76f51',
                '#d62828',
                '#023e8a',
                '#0077b6',
                '#0096c7',
                '#00b4d8',
                '#48cae4',
              ]
          });
    }
}

export default AdvanceColorPicker;