var numbers = [0, 1, 2,5, 3, 3, 4,4,5]
var unique={"unique_no":[]}
var cnt
var k=0
for(var i=0;i<numbers.length;i++)
{
    cnt=false
    for(var j=i+1;j<numbers.length;j++)
    {
        if(numbers[i]==numbers[j])
        {
            cnt=true
        }
    }
    if(cnt==false)
        {

           unique["unique_no"][k++]=numbers[i]
        }
}
console.log(unique)
console.log("------------------------------------------------")
var myinfo={name:"soniya",age:28,knownlanguages:["marathi","hindi","english"]}
console.log(myinfo)
console.log(myinfo.name)
console.log(myinfo.knownlanguages[0])

myinfo["address"]="ghansoli"
console.log(myinfo)