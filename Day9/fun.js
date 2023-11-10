function addition(num1,num2)
{
    console.log("addition of ",num1,"and",num2,"is", num1+num2)
}
addition(10,20)

var array=[1,2,3,4,56,7]
var target=58
function findTarget(array,target)
{
    var flag=false
    for(var i=0;i<array.length;i++)
    {
        if(array[i]==target)
        {
            console.log(target ,"target found")
            flag=true
        }
    }
    if(flag==false)
    {
        console.log(target,"target not found")
    }
}
findTarget(array,target)


function evenOdd(num)
{
    if(num>0)
    {
        if(num % 2 ==0)
        {
            return "num is even"
        }
        else{
            return "num is odd"
        }
    } 
    
 else{
        if(num<0)
        {
            return "num is negative"
        }
        else
        {
        return "num is zero"
        }
    }
}

console.log(evenOdd(10))
console.log(evenOdd(-20))
console.log(evenOdd(0))

