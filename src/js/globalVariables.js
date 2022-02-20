const globalVariables = JSON.parse(localStorage.getItem("globalVariables")) || {}

class GlobalVariables{
    constructor(){
        this.setDefaultValue()
    }

    setValue(key,value){
        globalVariables[key] = value
        localStorage.setItem("globalVariables",JSON.stringify(globalVariables))
    }

    getValue(key){
        return globalVariables[key]
    }

    setDefaultValue(){
        this.setValue("color",globalVariables.color || `#ff4d4d`)
        this.setValue("lineWidth", globalVariables.lineWidth || 10)
        this.setValue("subLayers",[])
        this.setValue("canMouseDown",true)
        this.setValue("canMouseMove",true)
        this.setValue("canMouseUp",true)
    }
}

export default GlobalVariables
