import { dogs } from "./data.js";
import { randomNumber } from "./utils.js";
import Dog from "./dogs.js";

let dog = new Dog(dogs[randomNumber(dogs.length)])

const likeBtn = document.getElementById("like-btn")
const rejectBtn = document.getElementById("reject-btn")
const buttonEl = document.getElementById("buttons")

function render() {
    console.log(dog)
    console.log(Object.keys(dog))

    if(Object.keys(dog).length > 0) {
        document.getElementById("profile-field").innerHTML = dog.getDogHtml()
    } else {
        console.log("ennyi")
        document.getElementById("profile-field").innerHTML = ` 
            <div>There are no more dog</div>
        `
        buttonEl.style.display = none
    }
    
}
render()

document.addEventListener("click", function(e) {
    if(e.target.id === "like-btn") {
        targetButton("like")
    }
    else if(e.target.id === "reject-btn") {
        targetButton("nope")
    } else { console.log("nope")}
})

function targetButton(buttonMode) {
    document.getElementById("modal").innerHTML = `
        <img src="images/${buttonMode}-image.png">
    `
    likeBtn.disabled = true
    rejectBtn.disabled = true    

    dog.likedDog(dog)

    setTimeout( () => {
        likeBtn.disabled = false
        rejectBtn.disabled = false
     
        getNewDog()
        
        render()
        document.getElementById("modal").innerHTML = ``
    }, 1000)
}

function getNewDog() {
    const dogArray = dog.getNewDogArray()
    dog = new Dog(dogArray[randomNumber(dogArray.length)])  
    console.log(dogArray)  
}
