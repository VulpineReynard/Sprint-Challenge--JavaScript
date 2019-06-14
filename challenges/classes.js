// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakker {
  constructor(cubeStuff) {
    this.length = cubeStuff.length;
    this.width = cubeStuff.width;
    this.height = cubeStuff.height;
  }
  volume() {
    return (this.length * this.width * this.height);
  }
  surfArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMakker {
  constructor(cubestuff){
    super(cubestuff);
  }
  vol() {
    return this.length * this.length * this.length;
  }
  surfaceArea() {
    return 6 * (this.length * this.length);
  }
}

const cube = new CubeMaker({
  length: 5
});

const cuboidd = new CuboidMakker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidd.volume()); // 100
console.log(cuboidd.surfArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.vol());
console.log(cube.surfaceArea());