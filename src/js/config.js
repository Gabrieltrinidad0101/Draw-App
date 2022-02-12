const config = JSON.parse(localStorage.getItem("config")) || {}

//is testing
config.positionShapes = {}
/////////

class Config{
    constructor(){
        this.#setDefaultValue()
    }
    setValue(key,value){
        config[key] = value
        localStorage.setItem("config",JSON.stringify(config))
    }

    getValue(key){
        return config[key]
    }

    #setDefaultValue(){
        this.setValue("color",config.color || `#ff4d4d`)
        this.setValue("lineWidth", config.lineWidth || 10)
        this.setValue("subLayers",[])
        this.setValue("canMouseDown",true)
        this.setValue("canMouseMove",true)
        this.setValue("canMouseUp",true)
    }
}

export default Config