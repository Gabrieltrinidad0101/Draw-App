const config = {}

class Config{
    setValue(key,value){
        config[key] = value
    }

    getValue(key){
        return config[key]
    }
}


export default Config