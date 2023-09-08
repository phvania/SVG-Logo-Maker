// test all of our shapes here
// import our shapes
const {  Circle, Triangle, Square, Shape } = require('./shapes.js');

// our first test 
// we want to implement a shape

//test to set color on any shape
describe('Shape', () => {
    test('should create a shape with color attribute', () => {
        let color = 'blue'
        let myShape = new Shape();
        myShape.setColor(color)
        expect(myShape.color).toEqual(color)
    })
})

// test to render our circle
describe('Circle', () => {
    test('should create a  shape', () => {
        let color = 'blue'
        let myCircle = new Circle()
        myCircle.setColor(color)
        let svg = myCircle.render()
        expect(svg).toEqual(
            `<circle cx="150" cy="100" r="80" fill="${color}" />`)
    })
})
// test to render our Triangle
describe('Triangle',() => {
    test('should create a Triangle', () => {
        let color = 'blue'
        let myTriangle = new Triangle()
        myTriangle.setColor(color)
        let svg = myTriangle.render()
        expect(svg).toEqual(`<Triangle cx="150" cy="100" r="80" fill="${color}" />`)
    })

    })
    //test to render our Square
    describe('Square', () => {
        test('should create a Square', () => {
            let color = 'blue'
            let mySquare = new Square()
            mySquare.setColor(color)
            let svg = mySquare.render()
            expect(svg).toEqual(`<Square cx="150" cy="100" r="80" fill="${color}" />`)
        })

    })
// // test our SVG class
// class SVG {
//     constructor() {
//         this.text = "";


//         setText(text, color); {
//             this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
//         }
//     }

// // test to render our text and color
// //describe(text, () => {
//    /// test('should create a text', () => {
//         //let color = 'blue'
//         //let myText = new Text()
//        // myText.setColor(color)
//        // let svg = myText.render()
//        // expect(svg).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`)
//     }
    
//     describe('Triangle',() => {
//         test('should create a Triangle', () => {
//             let color = 'blue'
//             let myTriangle = new Triangle()
//             myTriangle.setColor(color)
//             let svg = myTriangle.render()
//             expect(svg).toEqual(`<Triangle cx="150" cy="100" r="80" fill="${color}" />`)
//         })
//     })