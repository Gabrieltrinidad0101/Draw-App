const config = {}

class Config{
    constructor(){
        this.#setDefaultValue()
    }
    setValue(key,value){
        config[key] = value
    }

    getValue(key){
        return config[key]
    }

    #setDefaultValue(){
        this.setValue("color",`#000000`)
        this.setValue("lineWidth","10")
    }
}

export default Config