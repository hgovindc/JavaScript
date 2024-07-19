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

// a=[]
// n=prompt( "enter a number" )
// console.log(n);
// for(i=1;i<=n;i++)
// {
//     if(i%5==0 && i%3==0)
//     {
//         a.push("fizz buzz")
//     }
//     else if (i%5==0)
//     {
//         a.push("buzz")
//     }
//     else if(i%3==0)
//     {
//         a.push("fizz")
//     }
//     else{
//         a.push(i)
//     }
// }
// console.log(a);
a=[];
while(true){
    choice=prompt("[1] Add Data \n [2] Display Data \n [3] Edit \n [4] Delete \n [5] Exit ");
    if(choice==1){
        task=prompt("Enter task");
        a.push(task)
    }
    else if(choice==2){
        alert(a.join(" "));
    }
    else if(choice==5){
        break;
    }
       else if(choice==3){
        nm=prompt("enter the number for edit");
        data=prompt("enter data for update")
        a[num-1]=data
       }
       else if(choice==4){
        k=prompt("enter data for delete")
        a.splice(k-1,1)
    }
    else if(choice==5)
    {
        break;

    }
    else{
        alert("invalid input");
    }
}