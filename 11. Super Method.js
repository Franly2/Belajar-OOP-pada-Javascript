class Shape {
  paint() {
    console.log("paint shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.log("paint circle");
  }
}

const circle = new Circle();
circle.paint();
