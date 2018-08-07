// Rover Object Goes Here
var rover = {
  name:"Wal-E",
  direction:"N",
  x:0,
  y:0,
  travelLog:["(0,0)"],
}

var grid = [
  ["Wal-E", null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
];
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "N"
    break;
  }
  console.log("Turning left sir! We are now facing: " +rover.direction)
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "N"
    break;
  }
  console.log("Turning right sir! We are now facing: " +rover.direction);
}

function moveForward(rover){
  switch(rover.direction){
    case "N":
    if (rover.x === 0){
      console.log("Cannot go farther Chief")
    }
    else {
      rover.x -= 1;
    }
    break;
    case "W":
    if (rover.y === 0) {
      console.log("Cannot go farther Chief")
    }
    else {
      rover.y -= 1;
    }
    break;
    case "S":
    if (rover.x === 9) {
      console.log("Cannot go farther Chief")
    }
    else {
      rover.x += 1;
    }
    break;
    case "E":
    if (rover.y === 9) {
      console.log("Cannot go farther Chief")
    }
    else {
      rover.y += 1;
    }
    break;
  }
  rover.travelLog.push("("+rover.x+", "+rover.y+")")
  console.log("Lets go forward!")
}

function moveBackwards(rover){
  switch (rover.direction){
    case "N":
    if (rover.x === 9){
      console.log("Captain, we cannot reverse")
    }
    else {
      rover.x += 1;
    }
    break;
    case "W":
    if (rover.y === 9){
      console.log("Captain, we cannot reverse")
    }
    else {
      rover.y += 1;
    }
    break;
    case "E":
    if (rover.y === 0){
      console.log("Captain, we cannot reverse")
    }
    else {
      rover.y -= 1;
    }
    break;
    case "S":
    if (rover.x === 0){
      console.log("Captain, we cannot reverse")
    }
    else {
      rover.x -= 1;
    }
    break;
  }
  rover.travelLog.push("("+rover.x+", "+rover.y+")")
  console.log("Heading in reverse!")
}

function moveRover(command){
  console.log("Roger!");
  for (let i=0; i <= command.length; i++){
    if (command[i] === 'f'){
      moveForward(rover);
    }
    else if (command[i] === 'l'){
      turnLeft(rover);
    }
    else if (command[i] === 'r'){
      turnRight(rover);
    }
    else if (command[i] === 'b'){
      moveBackwards(rover);
    }
    else {
      console.log("Cannot go that way sir!")
      continue;
    }
  }
}

function logCoordinates(rover){
  var coordinates = getCoordinates(rover);
  rover.travelLog.push("("+rover.x+", "+rover.y+")")
}

function getCoordinates(rover){
  var coordinates =  console.log("("+rover.x+", "+rover.y+")");
    return coordinates
  
}


function printCoordinates(rover){
  console.log("Sir, we have traveled along: " +rover.travelLog)
}









