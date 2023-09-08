//file system module import
const fs = require('fs');
//inquirer import
const inquirer = require('inquirer');
const SVG  = require("./lib/svg");
//importing classes from ./lib/shapes directory
const {Circle, Square, Triangle } = require("./lib/shapes");

//const { default: Choices } = require('inquirer/lib/objects/choices');


// this is where we will use inquirer to ask the user
// which shape, color and text they want
// we can implement our classes using that information
// we'll implement a shape with color
// then implement the svg based on that info

// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.

//class Svg{
    //constructor(){
        //this.textElement = ''
       // this.shapeElement = ''
   // }
    //render(){

        //return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    //}
   // setTextElement(text,color){
       // this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    //}
    //setShapeElement(shape){
        //this.shapeElement = shape.render()

///}
    
//}


// TODO: Create an array of questions for user input
function promptUser() {
inquirer 
.prompt( [
    //logo text
    {
        type:"input",
        message:"please select up to  three charactors for your  logo text",
        name:"text"
    },
    //text  color
    {
        type:"input",
        message:"please enter a color keyword or hexadecimal number for your text color",
        name:"textColor"
    },
    // options for shapes 
    {
        type:"list",
        message:"please choose  logo shape (hit enter to select)",
        name: "Shape",
        choices: ['Triangle', 'Circle', 'Square']
     
    },
    //shape color
    {
       type:"input" ,
       message:"please enter a color keyword or hexadecimal number for your logo's color",
       name:"ShapeBackgroundColor"
    },
    ])
};
        
        

       .then((answers) => {
      // Use user feedback for... whatever!!
    
      if (answers.text.length > 0 && answers.text.length < 4) {
          // 1-3 chars, currect answer
         const userText = answers.text;        
           console.log("Invalid user text, Please enter 1-3 Characters, no more and no less");
         promptUser();

      } else {
          //calling write file function to generate svg file
          writeToFile("logo.svg", answers);
          
        
      }})
      //console.log("UserText: [" + userText + "]");

     // .then((answer) => {
   // const userTextColor = answers.textColor;
      
    //const userShapeType = answers.logoShape;})
       // user_text_color = white
      //
        //console.log("wrong answer, ");
        //return;

        //console.log("user text color;white")
      //}})

      //.then ((naswer) => {

      

      

      //user font color
      //user_text_color = answers["text-color"];
     // console.log("User text color: [" + user_text_color + "]");
      //user shape color
      ////user_shape_color = answers.logoshape;
      //console.log("User shape color: [" + user_shape_color + "]");
      //user shape type
      //user_shape_type = answers["pixel-image"];
      //console.log("User entered shape = [" + user_shape_type + "]");
      // File starts as an empty string
  let svgString = "";
  // Sets width and height of logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`;










      let  shape;
      if ( answer.logoShape === "Triangle") {
        shape = new Triangle();
       svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
      } 
      else  
      
      if ( answer.logoShape === "Cricle") {
        shape = new Circle(); 
       svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
        
      }
      else
      
      if ( answer.logoShape === "Square") {
        shape = new Square();  
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`
     
      }  // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
      svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
      // Closing </g> tag
      svgString += "</g>";
      // Closing </svg> tag
      svgString += "</svg>";

    




      
      //let userShape;
      //if(userShapeType === "Square" || userShapeType === "square") {
      //userShape = new Square
      //console.log("user selected  Square shape");
      //} 
     // else if (userShapeType === "Circle" || userShapeType === "circle") {
        //  userShape = new Circle();
         // console.log("User selected Circle shape");
      //}
      //else if (userShapeType === "Triangle" || userShapeType === "triangle") {
         // userShape = new Triangle();
         // console.log("User selected Triangle shape");
      //}
      //else {
         // console.log("Invalid shape!");
      //}
      //const userShapeColor = answers.logoShape.color
      //userShape.setColor(userShapeColor);// Create a new Svg instance and add the shape and text elements to it
      //var svg = new svg();
     // svg.setTextElement(userText, userTextColor);
      //svg.setShapeElement(userShape);
      //svgString = svg.render();
      
      //Print shape to log
      //console.log("Displaying shape:\n\n" + svgString);
      //document.getElementById("svg_image").innerHTML = svgString;
  
     //console.log("Shape generation complete!");
      //console.log("Writing shape to file...");
      //writeToFile(svg_file, svgString); 
      
      // TODO: Create a function to initialize app
     // function init() {
        //  inquirer
         // .prompt(
           //   questions
         // ).then(data => {
      //fs.writeFileSync('svg.file', generateMarkdown(data))
          //  } )
     // } 
      
      // Function call to initialize app
     // init();  




  
  //init()

  
  // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });



  


    
      

    
   // .catch(error) => {
     // if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
     // } else {
        // Something else went wrong
     // }
    ;// Function to write data to file

    function writeFile(logo, data) {
        console.log("Writing [" + data + "] to file [" + logo.svg + "]")
       filesystem.writeFile(logo.svg, data, function (err) {
            if (err) {
                return console.log(err);
           }
           console.log(" Generated a logo.svg!");
        });
    }
    //function init() {
       // inquirer
        //.prompt(
           // questions
//.then(data => {
    //fs.writeFileSync('logo.svg', 'generateSvg')
         // } )
   // }
    module.exports = SVG
    // Function call to initialize app
   // init();
    


    
    //fs.writeFile(fileName, svgString, (err) => {
       // err ? console.log(err) : console.log("Generated logo.svg");
     // });

    //async function init() {
       // console.log("Starting init");
       // var svgString = "";
        //var svg_file = "logo.svg";}



  
