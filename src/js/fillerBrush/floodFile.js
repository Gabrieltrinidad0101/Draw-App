export default class FloodFile{
    constructor(ctx){
        this.ctx = ctx
        this.i = null;
        this.j =  null;
        this.old_color = null;
        this.new_color = null;
        this.imageData = null
    }

    getPixel(imageData,x,y){
        if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
            return [-1, -1, -1, -1] // impossible color
          } else {
            const offset = (y * imageData.width + x) * 4;
            return imageData.data.slice(offset, offset + 4);
          }
    }

    setPixel(imageData, x, y, color){
        const offset = (y * imageData.width + x) * 4;
        imageData.data[offset + 0] = color[0];
        imageData.data[offset + 1] = color[1];
        imageData.data[offset + 2] = color[2];
        imageData.data[offset + 3] = color[3] * 255;
    }
    
    colorsMatch(a,b){
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }


    flood(x,y,fillColor){
        this.imageData = this.ctx.getImageData(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        const targetColor = this.getPixel(this.imageData,x,y)
        if (!this.colorsMatch(targetColor, fillColor)) {
            const pixelsToCheck = [x, y];
            while (pixelsToCheck.length > 0) {
              const y = pixelsToCheck.pop();
              const x = pixelsToCheck.pop();
              const currentColor = this.getPixel(this.imageData, x, y);
              if (this.colorsMatch(currentColor, targetColor)) {
                this.setPixel(this.imageData, x, y, fillColor);
                pixelsToCheck.push(x + 1, y);
                pixelsToCheck.push(x - 1, y);
                pixelsToCheck.push(x, y + 1);
                pixelsToCheck.push(x, y - 1);
              }

            }

            
            // put the data back
            this.ctx.putImageData(this.imageData, 0, 0);
          }
    }
}