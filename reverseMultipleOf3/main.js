//first we declare an empty array
var d3v  = [];
//we loop numbers between 1 to 100
for(let i=1;i<=100;i++)
{
    // if iteration number divisible to 3, block works.
    if(i%3==0)
    {     //The push() method adds one or more elements to the end of an array and returns the new length of the array. 
        d3v.push(i) 
    }
}
//print out the array in reverse
console.log(d3v.reverse());