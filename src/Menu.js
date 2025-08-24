
export function menucontrol (e,curentclass){
if( e.target.getAttribute("class") != curentclass){
let container = document.querySelector("#content");
let btn = document.createElement("div")
if(document.querySelectorAll(".content>div")){
       Array.from( document.querySelectorAll("#content>div")).forEach((item)=>{
        container.removeChild(item);
       })}
btn.textContent = "Normal Bhojan"
btn.style.color = "black";
container.appendChild(btn)
}}
