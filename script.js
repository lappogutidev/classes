console.log("test : script.js loaded");

window.onload = function() {
    let rectangle = new Polygon(10, 10);
    let p1 = new Point(0, 0);
    let p2 = new Point(3, 4);
    let richardParker = new Animal("RichardParker");
    let paisa = new Dog("Paisa");

    console.log(Point.distance(p1, p2));
    console.log(rectangle.calcArea());
    richardParker.speak();
    paisa.speak();

}
