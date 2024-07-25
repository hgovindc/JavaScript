// function onHandleChhange(e){
//     console.log(e.value);
//     document.getElementById('txt').value=""
    
// const input=document.getElementById("txt");
// const display=document.getElementById("display");
// const button=document.getElementById("btn");
// const valueArray=[];
// button.addEventListener('click',()=>{
//     const value=input.value;
//     valueArray.push(value);
//     document.getElementById('txt').value="";
//     console.log(valueArray);
//     display.innerHTML=`Array values:${valueArray.join(',')}`;
// })

// set clock
function timer(){
    let date=new Date();
    hours=date.getHours();
    ampm=hours<12?"AM":"PM"
    document.getElementById("timer").textContent=`${putZero(hours%12)} : ${putZero(date.getMinutes())} : ${putZero(date.getSeconds())}  ${ampm} ${putZero(date.getDate())}-${putZero(date.getMonth(""))}-${putZero(date.getFullYear())}`
    document.getElementById("date").textContent=`${putZero(hours%12)} : ${putZero(date.getMinutes())} : ${putZero(date.getSeconds())}  ${ampm} ${putZero(date.getDate())}-${putZero(date.getMonth(""))}-${putZero(date.getFullYear())}`
    setTimeout(()=>{
        timer()
 
    },1000)
}
timer()
function putZero(time){
    return time<10?"0"+time:time;
    if(now.getHours()==6&& now.getMinutes()===0){
        const element=document.getElementById('background')
    }


}