//Q Find out index of three number which addition is target.
// 1 - On
// 2 - On^2
// 3 - On^3

// for(){}
// for(){}
// On

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var target = 15;
function array_addition()
{
    
    for(var i=0;i<array.length-2;i++)
    {
        for(var j=i+1;j<array.length-1;j++)
        {
            for(var k=j+1;k<array.length;k++)
            {
                if(array[i]+array[j]+array[k]==target)
                {
                    console.log(i,j, k)
                }
            }
        }
    }

}
array_addition()
function even( num1)
{
    console.log(num1,"number is even")
}
function odd(num1)
{
    console.log(num1,"number is odd")
}
var num1=1234
if(num1 % 2 ==0)
{
    even(num1)
}
else{
    odd(num1)
}