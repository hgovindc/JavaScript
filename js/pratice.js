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
// function timer(){
//     let date=new Date();
//     hours=date.getHours();
//     ampm=hours<12?"AM":"PM"
//     document.getElementById("timer").textContent=`${putZero(hours%12)} : ${putZero(date.getMinutes())} : ${putZero(date.getSeconds())}  ${ampm} ${putZero(date.getDate())}-${putZero(date.getMonth())}-${putZero(date.getFullYear())}`
    
    
//     setTimeout(()=>{
//         timer()
 
//     },1000)
// }
// timer()
// function putZero(time){
//     return time<10?"0"+time:time;
   


// }
function timer(){
    let date=new Date();
    hours=date.getHours();
    ampm=hours<12?"AM":"PM"
    document.getElementById("timer").textContent=`${putZero(hours%12)}-${putZero(date.getMinutes())}-${putZero(date.getSeconds())} ${ampm}  ${putZero(date.getDate())} -${putZero(date.getMonth(""))} -${putZero(date.getFullYear())}`
   
  setTimeout(()=>{
        timer()
    },1000)


}

timer()
function putZero(time){
    return time<10?"0"+time:time;
}

// 
function changeBackground() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
  
    if (hours >= 6 && hours < 19) { 
      document.body.style.backgroundImage = 'url(./img/1.jpg)';
    } else { 
      document.body.style.backgroundImage = 'url(./img/2.jpg)';
    }
  }
  
  setInterval(changeBackground, 3600000); 
  
  changeBackground();