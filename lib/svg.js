// SVG class that will implement our shapes
// we'll set the text here

// Our SVG class is going to write the svg line or tag or text
// then it's going to write the shape which is provided by the user
// then write the text
// then it will close the svg

class SVG {
    constructor() {
        this.text = "";
        this.shape = "";

    }
    setText(text, color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shape = shape.render()
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}