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
        this.setValue("color","black")
        this.setValue("lineWidth","10")
    }
}

export default Config