/**
 * Problem statement was to implement the Firefly Problem
 * Requirement was to take the grid of 30 height x 50 width
 * then we have to take a "*" inside that grid and move the
 * star in all the 9 direction of grid randomly and ensure that
 * it don't go outside the boundary of grid
 * Initially we need to place the star randomly and then select
 * [1,0,-1] and add to position to move the star
 */


// Here height, Width of grid has been declared as const
const gHeight = 30, gWidth = 50;

// position of "*" in x and y co-ordinate of grid to take randomly
let xDirection = Math.floor(Math.random() * gWidth-2);
let yDirection = Math.floor(Math.random() * gHeight-2);

// Initial position of star cannot be taken (0,0) since it is boundary position
if(xDirection==0) xDirection+=1
if(yDirection==0) yDirection+=1
var choiceArray = [1, 0, -1];

/** Function to check wheather given input is number or not
 * @param {Number} value is input to check
 */
    function isInteger(value) {
        // Check if the value is a number and it doesn't have a decimal part
        return typeof value === 'number' && Number.isInteger(value);
    }

/** Function to print Grid with "*"
 * 
 * @param {Number} gHeight is Height of the Grid
 * @param {Number} gWidth is Width of the Grid
 * @param {Number} xDirection is position of "*" in X-axis
 * @param {Number} yDirection is position of "y" in Y-axis
 * @throws {Error} if any of the Parameter is not a Number
 * 
 */
function print_star(gHeight, gWidth,xDirection,yDirection) {

    //if given parameters are not integer then return 
    if(!(isInteger(gHeight) && isInteger(gWidth) && isInteger(xDirection) 
    && isInteger(yDirection))){
        console.log("given arguments are not valid")
        return 
    }

    //Logic to print boundary and "*" inside that boundary
    for (let i = 0; i < gHeight; i++) {
        for (let j = 0; j < gWidth; j++) {
            //To print "+" in top-left,top-right, 
            //bottom-left and bottom-right corner
            if (i === 0 && j === 0 || i === 0 && j === gWidth - 1 
                || i === gHeight - 1 && j === 0 || i === gHeight - 1 
                && j === gWidth - 1) {
                process.stdout.write("+");
            } 
            // To print the horizontal boundary
            else if (i === 0 || i === gHeight - 1) {
                process.stdout.write("_");
            } 
            //To print the vertical boundary
            else if (j === 0 || j === gWidth - 1) {
                process.stdout.write("|");
            } 
            // To print the star inside the boundary
            else if (i === yDirection && j === xDirection) {
                process.stdout.write("*");
            } 
            // Fill the rest of the space with " "
            else {
                process.stdout.write(" ");
            }
        }
        console.log();
        
    }
}

/**
 * Logic to update the location of star and rendering the screen 
 * in every 8 millisecond
 */
setInterval(() => {
    console.clear()
    // Add 0 or 1 or -1 in x and y direction randomly
    let toAdd_x=choiceArray[Math.floor(Math.random() * choiceArray.length)]
    let toAdd_y=choiceArray[Math.floor(Math.random() * choiceArray.length)]
    xDirection+=toAdd_x
    yDirection+=toAdd_y
    //check if the firefly is going outside the boundary, undo the changes
    if(xDirection<=0 || xDirection>=gHeight-1){
        xDirection-=toAdd_x
    }
    if(yDirection<=0 || yDirection>=gHeight-1){
        yDirection-=toAdd_y
    }  
    // run the function print_star in every 800 millisecond
    print_star(gHeight, gWidth,xDirection,yDirection);
    
}, 800);
