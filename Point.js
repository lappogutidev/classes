console.log("test : Point.js loaded");

class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //Static Methods are called without and instantiated class
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }

}
