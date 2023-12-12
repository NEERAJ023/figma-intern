let sign= document.querySelector(".sign");
let join= document.querySelector(".join");
let container=document.querySelector(".container1");
let box2=document.querySelector(".box2");
sign.addEventListener("click",()=>{
    let it=container.classList.contains("hide");
    join.style.color="black";
    sign.style.color="#8064A2";
    join.classList.remove("help");
    sign.classList.add("help");

   if(it){
    container.classList.toggle("hide");
    box2.classList.toggle("hide");
   }
})
join.addEventListener("click",()=>{
    let its=box2.classList.contains("hide");
    sign.style.color="black";
    join.style.color="#8064A2";
    sign.classList.remove("help");
    join.classList.add("help");
   if(its){ 
    container.classList.toggle("hide");
    box2.classList.toggle("hide");
   }
})

let explore=document.querySelector(".explore");
let c1=document.querySelector(".c1");
explore.addEventListener("click",()=>{
     c1.classList.toggle("hide");
})
let hobbies=document.querySelector(".hobbies");
hobbies.addEventListener("click",()=>{
   
    c1.classList.toggle("hide");
})