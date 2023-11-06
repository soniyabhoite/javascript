// Q Find numbers from given range which are odd, include the range
//25-50
var oddcount=0
var evencount=0


for(var i=25;i<=50;i++)
{
    if(i%2 !=0)
    {
        console.log(i)
        oddcount++
    }
    else{

        evencount++
    }
}
console.log("count of odd number from 25-50 is",oddcount)
console.log("count of even number from 25-50 is",evencount)

var numbers=[1,3,4,6,7,8,9,10]
console.log("array elements",numbers)
var evenarry=[]
for(var i=0 ;i<numbers.length;i++)
{
    if(numbers[i] % 2 ==0)
    {
        evenarry.push(numbers[i])
    }
}
console.log("even array element",evenarry)

// Q Find out which two numbers from array have addition of target


var target=10
console.log("array elements have addition of ",target) 
for(var i=0;i<=numbers.length;i++)
{
    for(var j=i+1;j<=numbers.length;j++)
    {
        if(numbers[i]+numbers[j]==target)
        {
            console.log(numbers[i] , numbers[j])
        }
       
    }
}

// Q print element found or not found in array

var ele=12
var flag=false
for(var i=0;i<numbers.length;i++)
{
    if(numbers[i]==ele)
    {
        flag=true

    }
}
if(flag)
{
    console.log(ele,"element found in array ")

}
else{
    console.log(ele,"element not found in array")
}