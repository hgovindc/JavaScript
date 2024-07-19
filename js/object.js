// creating object
// let a=[{name:'allen',age:'20'},
//     {name:'amal',age:'20'},
//     {name:'shifas',age:'20'},
//     {name:'hari',age:'20'},
//     ]
// js=JSON.stringify(a);
// console.log(js);
// ob=JSON.parse(js);
// console.log(ob);
// for(i=0;i<ob.length;i++){
//     console.log(a[i].age);
// }
a=[{name:'allen',number:'8658996860'},
    {name:'amal',number:'8658996860'},
    {name:'hari',number:'8658996860'},
    {name:'shifas',number:'8658996860'},
]
while(true){
    choice=prompt("[1] Add Data \n [2] Display Data \n [3] Edit \n [4] Delete \n [5] Exit ");
    if(choice==1){
        console.log(a.allen);
        a.push(allen)
    
    }
    else if(choice==2){
        alert(a.join(" "));
    }
    else if(choice==5){
        break;
    }
       else if(choice==3){
        nm=prompt("enter the phone number");
        a[num-1]=data
       }
    //    else if(choice==4){
    //     k=prompt("enter data for delete")
    //     a.splice(k-1,1)
    // }
    // else if(choice==5)
    // {
    //     break;

    // }
    // else{
    //     alert("invalid input");
    // }
}