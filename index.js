let play=document.querySelector(".tictac");
let button=document.querySelectorAll(".button");
let msg=document.querySelector(".msg");
let msg_content=document.querySelector(".msg-content");
let newgame=document.querySelector("#new");
let restart=document.querySelector("#reset");


let playerX=true;
let winner=false;
let flag=false;
let count=0;
const wintrack=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]



button.forEach((but)=>{
but.addEventListener("click",()=>{
   count++;
   
    if(playerX){
        but.style.color="red";
             but.innerText="X";

             playerX=false;   

    }else{
        but.style.color="green";
        but.innerText="0";
        playerX=true;   
    }
    but.disabled=true;
    check();
    
    
    
});


});



function check(){
    for(let pattern of wintrack){
        let pos1=button[pattern[0]].innerText;
        let pos2=button[pattern[1]].innerText;
        let pos3=button[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
         if(pos1===pos2 && pos2==pos3){
         winnerResult(pos1);
         disablebuttons();
          
}
        }
    
    }
    if(count==9 && flag==false){
        msg.innerText="Match Draw";
        msg_content.classList.remove("hide");
    }
   
  
   
}
const winnerResult=(pos1)=>{
    flag=true;
   
   msg.innerText=`Congratrulation winner is ${pos1}`;
   msg_content.classList.remove("hide");
  
}
const disablebuttons=()=>{
    for(btn of button){
        btn.disabled=true;
        
    }
}
const enableButton=()=>{
   for(btn of button){
btn.disabled=false;
btn.innerText="";
   }
   count=0;
}
newgame.addEventListener("click",()=>{
    playerX=true;
    enableButton();
    msg_content.classList.add("hide");
})
restart.addEventListener("click",()=>{
enableButton();
msg_content.classList.add("hide");

})