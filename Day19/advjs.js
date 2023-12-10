//closure
function outerFunction() {
    const myname = "soniya";
    function innerFunction() {
        return `Hello everyone, Im ${myname}..`;
    }
    return innerFunction;
}
var result = outerFunction();
console.log(result())


console.log("Starting")

setTimeout(() => {
    console.log("settimeout")
 }, 0)

console.log("Ending")


/*Promise.resolve((data) => {
    console.log(data)
}).reject((error) => {
    console.log(error)
})*/

console.log("start")

Promise.resolve().then(() => {
    console.log("promise")
})

console.log("end")




console.log("start")
setTimeout(() => {
    console.log("st")
},0)
Promise.resolve().then(() => {
    console.log("promise")
})
console.log("end")