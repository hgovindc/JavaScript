// a=["hai",1,true,null,"hai",2,false,"day",null]
// console.log(a);
// console.log(a.length);
// console.log(a.join(" "));
// console.log(a.indexOf(null));
// console.log(a);
// console.log(a.indexOf(true));
// a.push("new")
// console.log(a);
// a.pop();
// console.log(a);
// a.shift();

a=[]
n=prompt( "enter a number" )
console.log(n);
for(i=1;i<=n;i++)
{
    if(i%5==0 && i%3==0)
    {
        a.push("fizz buzz")
    }
    else if (i%5==0)
    {
        a.push("buzz")
    }
    else if(i%3==0)
    {
        a.push("fizz")
    }
    else{
        a.push(i)
    }
}
console.log(a);