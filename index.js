import { dogs } from "./data.js";
import { randomNumber } from "./utils.js";
import Dogs from "./dogs.js";

let dog = new Dogs(dogs[randomNumber()])
const likeBtn = document.getElementById("like-btn")
const rejectBtn = document.getElementById("reject-btn")

function render() {
    document.getElementById("profile-field").innerHTML = dog.getDogHtml()
}
render()

document.addEventListener("click", function(e) {
    if(e.target.id === "like-btn") {
        targetButton("like")
    }
    else if(e.target.id === "reject-btn") {
        targetButton("nope")
    }
})

function targetButton(buttonMode) {
    document.getElementById("modal").innerHTML = `
        <img src="images/${buttonMode}-image.png">
    `
    
    setTimeout( () => {
        dog = new Dogs(dogs[randomNumber()])
        render()
        document.getElementById("modal").innerHTML = ``
    },1500)
}

