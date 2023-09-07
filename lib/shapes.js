// Create a base class Shape that will have a color attribute and a setColor method
// create a circle that extends the shape class
// also triangle
// also a Square

class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}
// create a circle that extends the shape class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
// create a triangle that extends the shape class

class Triangle extends Shape {
    render() {
        return `<Triangle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
// create a square that extends the shape class

class Square extends Shape {
    render() {
        return `<Square cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

module.exports = { Shape, Circle, Triangle, Square }

