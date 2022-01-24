let mouseDownFn = null
let mouseMoveFn = null
let mouseUpFn = null

class FunctionToExecute{
    setMouseDownFn(fn){
        mouseDownFn = e=>fn(e)
    }

    setMouseMoveFn(fn){
        mouseMoveFn = e=>fn(e)
    }

    setMouseUpFn(fn){
        mouseUpFn = e=>fn(e)
    }

    runMouseDownFn(e){
        mouseDownFn(e)
    }

    runMouseMoveFn(e){
        mouseMoveFn(e)
    }
    runMouseUpFn(e){
        mouseUpFn(e)
    }

}

export default FunctionToExecute