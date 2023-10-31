console.log("if else ")
var userage = 19
if (userage < 19) {
    console.log("You are under age")

}
else if (userage > 19 && userage < 90) {
    console.log("you are allowed for Driving license")
}
else if (userage > 90) {
    console.log("You are over age")
}
else if (userage == 19) {
    console.log("You are allowed for learning license")
}
else {
    console.log("Sorry...")
}
console.log("Switch case")
console.log("Option- 1. armstrong  2.pallindrome  3. reverse")

var choice = 1;
switch (choice) {
    case 1:
        console.log("armstrong no.")
        break;
    case 2:
        console.log("pallindrome no.")
        break;
    case 3:
        console.log("reverse no.")
        break;
    default:
        console.log("invalid choice")
        break;
}

console.log("undefined datatypes")
var uname=undefined
console.log(uname)

console.log("Array")
var product=["pen","pencial","Rubber",[10,20,30]]
console.log(product)
console.log(product[0])
console.log(product[1])
console.log(product[3][2])

