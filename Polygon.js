console.log("test : Polygon.js loaded");

class Polygon {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
    
}
