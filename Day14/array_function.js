var array=[10,20,30,40]
console.log("array element :",array)
var arr=array.map((number)=> number*2)
console.log("modified array using map():",arr)
console.log("using forEach()")
array.forEach((num)=>console.log(num))

var arr1=array.filter((num)=>num>20)
console.log("filter array :", arr1)

console.log("reduce()")
var initialval=0
var sum=array.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialval)

console.log(sum,"sum of array")

setTimeout(()=>{
    console.log("hii")
},5000)



