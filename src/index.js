import { homecontrol } from "./home.js";
import { menucontrol } from "./Menu.js";
import { aboutcontrol } from "./About.js";



let func = {homecontrol,menucontrol,aboutcontrol};
let currentclass;

function btncontroller() {
    let array = Array.from(document.querySelectorAll("button"));
    let heading = document.querySelector("h1")
    let content = document.querySelector("#content")

    array.forEach((item) => {
        item.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("class"))
            let man=e.target.getAttribute("class") + "control";
            func[man](e,currentclass);
            currentclass = e.target.getAttribute("class")

        })
    })

}

btncontroller();
