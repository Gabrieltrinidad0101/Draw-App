class FunctionToExecute{
    #mouseDownFn = null
    #mouseMoveFn = null
    #mouseUpFn = null

    setFunctions(containerFunctions){
        this.#mouseDownFn = e =>containerFunctions.mouseDownFn(e)
        this.#mouseMoveFn = e =>containerFunctions.mouseMoveFn(e)
        this.#mouseUpFn = e =>containerFunctions.mouseUpFn(e)
    }

    runMouseDownFn(e){
        this.#mouseDownFn(e)
    }

    runMouseMoveFn(e){
        this.#mouseMoveFn(e)
    }
    runMouseUpFn(e){
        this.#mouseUpFn(e)
    }

}

export default FunctionToExecute