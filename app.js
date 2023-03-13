console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let answer= window.prompt("Guess a number");
let favNum = 23
if (answer < favNum) {
  window.alert("too low")
} else if (answer > favNum){
window.alert("Too High")
}
else{
  window.alert("Congratulations!!")
}
// Exercise 2
let birthMonth=window.prompt("What is your birth month");

switch (birthMonth) {
  case "January":
    window.alert("You were born in the Winter")
    break;
    case "February":
    window.alert("You were born in the Winter")
    break;
    case "March":
      window.alert("You were born in the Spring")
  default: window.alert("Season not determined")
    break;
}

// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type="Tank Top"
    break;
    case "02":
    type="T-Shirt"
    break;
    case "03":
      type="Long Sleeve"
      break;
      case "04":
      type="Sweat Shirt"
      break;
  default: type="other"
    break;
}

switch (colorId) {
  case "BL":
    color="Black"
    break;
    case "BL":
    color="Blue"
    break;
    case "RD":
      color="Red"
      break;
      case "PU":
      color="Purple"
      break;
  default: color="white"
    break;
}

switch (sizeId) {
  case "S":
    size="Small"
    break;
    case "M":
    size="Medium"
    break;
    case "L":
      size="Large"
      break;
      case "XL":
      size="Extra Large"
      break;
  default: size="One Size Fits All"
    break;
}


console.log(`Product: ${size} ${color} ${type}`);




