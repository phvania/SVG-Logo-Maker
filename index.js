const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG, makeShape } = require("./lib/svg");
const {Circle, Square, Triangle } = require("./lib/shapes");

//const { default: Choices } = require('inquirer/lib/objects/choices');


// this is where we will use inquirer to ask the user
// which shape, color and text they want
// we can implement our classes using that information
// we'll implement a shape with color
// then implement the svg based on that info

// TODO: Create an array of questions for user input
const questions = [
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
        name: "logoShape",
        choices: ['Triangle', 'Circle', 'Square']
     
    },
    //shape color
    {
       type:"input" ,
       message:"please enter a color keyword or hexadecimal number for your logo's color",
       name:"logoShapeColor"
    },
    ]
    inquirer
    .prompt(
      /* Pass your questions in here */
      questions
    )
    .then((answers) => {
      // Use user feedback for... whatever!!
    
      if (answers.text.length > 0 && answers.text.length < 4) {
          // 1-3 chars, currect answer
         const userText = answers.text;
      } else {
          // 0 or 4+ chars, wrong answer
          console.log("Invalid user text, Please enter 1-3 Characters, no more and no less");
          return;
      }
      console.log("User text: [" + user_text + "]");

     // .then((answer) => {
    const userTextColor = answers.textColor;
      
    const userShapeType = answers.logoShape;
       // user_text_color = white
      //
        //console.log("wrong answer, ");
        //return;

        //console.log("user text color;white")
      //}})

      //.then ((naswer) => {

      })

      

      //user font color
      //user_text_color = answers["text-color"];
     // console.log("User text color: [" + user_text_color + "]");
      //user shape color
      ////user_shape_color = answers.logoshape;
      //console.log("User shape color: [" + user_shape_color + "]");
      //user shape type
      //user_shape_type = answers["pixel-image"];
      //console.log("User entered shape = [" + user_shape_type + "]");

      //user shape

      if(user_shape_type === "Square" || user_shape_type === "square") {
       let   user_shape = 
          user_shape = new Square(); console.log("User selected Square shape");
      }
      else if (user_shape_type === "Circle" || user_shape_type === "circle") {
          user_shape = new Circle();
          console.log("User selected Circle shape");
      }
      else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
          user_shape = new Triangle();
          console.log("User selected Triangle shape");
      }
      else {
          console.log("Invalid shape!");
      }
      user_shape.setColor(user_shape_color);// Create a new Svg instance and add the shape and text elements to it
      var svg = new Svg();
      svg.setTextElement(user_text, user_font_color);
      svg.setShapeElement(user_shape);
      svgString = svg.render();
      
      //Print shape to log
      console.log("Displaying shape:\n\n" + svgString);
      //document.getElementById("svg_image").innerHTML = svgString;
  
     console.log("Shape generation complete!");
      console.log("Writing shape to file...");
      writeToFile(svg_file, svgString); 
  
  //init()

  


  


    
      

    
   // .catch(error) => {
     // if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
     // } else {
        // Something else went wrong
     // }
    ;// Function to write data to file
    function writeToFile(svg_file, data) {
        console.log("Writing [" + data + "] to file [" + svg_file + "]")
        filesystem.writeFile(svg_file, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(" Generated a logo.svg!");
        });
    }


  
