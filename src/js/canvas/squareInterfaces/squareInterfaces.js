class SquareInterfaces{
    constructor(){
        this.body = document.body
    }

    center({x,y,width,height}){
        return [x - width / 2, y  - height /2 ]
    }

    create(x,y,width,height,center=false){
        const squareDimension = {x,y,width,height,center}
        const [centerX,centerY] = center ? this.center(squareDimension) : [x,y]
        const square = document.createElement('div');
        square.className = "squareInterfaces"
        square.style.left = `${centerX}px`;
        square.style.top = `${centerY}px`;
        square.style.width = `${width}px`
        square.style.height = `${height}px`
        this.body.appendChild(square)
        return square
    }
}

export default SquareInterfaces