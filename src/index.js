
function changeColor(){
    let mine1=document.getElementById("done");
    mine1.innerHTML = "I know now what the DOM is😍"
    mine1.style.backgroundColor="blue";
    mine1.style.color = "green";
 }
    let mine =document.getElementById("done");
    mine.addEventListener("click", changeColor);

function changeColor1(){

    let mine2=document.getElementById("word");
     mine2.innerHTML = "I know how to access/ select elements in the DOM.👌";
    mine2.style.backgroundColor="blue";
    mine2.style.color = "green";
}
    let mine2=document.getElementById("word");
    mine2.addEventListener("click", changeColor1);

function changeColor2(){

    let mine3=document.getElementById("cool");
    mine3.innerHTML = "I know how to use the style methods to change the style of an element in the DOM 😎";
    mine3.style.backgroundColor="blue";
    mine3.style.color = "gray";
}
    let mine3=document.getElementById("cool");
    mine3.addEventListener("click", changeColor2);

function changeColor3(){
    let mine4=document.getElementById("send");
    mine4.innerHTML = "I know how the styling properties differ in JS from CSS ❤️";
    mine4.style.backgroundColor="blue";
    mine4.style.color = "blue";
}
    let mine4=document.getElementById("send");
    mine4.addEventListener("click", changeColor3);


function changeColor4(){

    let mine5=document.getElementById("book");
    mine5.innerHTML = "yes i did it!! I manipulated the DOM and styled my elements👌👋";
    mine5.style.backgroundColor="blue";
    mine5.style.color = "green";
}
    let mine5=document.getElementById("book");
    mine5.addEventListener("click", changeColor4);


    function openimage(){

let img1= document.getElementById("photo");
img1.style.display = "block";
img1.style.margin = "0 auto";

let close = document.getElementById("close1");
close.style.display = "block";
close.style.margin = "0 auto";
    }
    let open =document.getElementById("open");
    open.addEventListener("click",openimage);

function closeimage(){
let img2 = document.getElementById("photo");
img2.style.display = "none";
img2.style.margin = "0 auto";


let close2 = document.getElementById("close1");
close2.style.display = "none";
close2.style.margin = "0 auto";
}
let close1 = document.getElementById("close1");
close1.addEventListener("click",closeimage);