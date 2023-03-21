import { dogs } from "./data.js"

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, age, avatar, bio} = this
        return ` 
                <img class="dog-picture" src=${avatar}>
                <div class="text-box">
                    <h2 class="profile-data">${name}, ${age}</h2>
                    <h3 class="profile-bio">${bio}</h3>
                </div>
            `
    }
    likedDog(dogId) {
        dogs.forEach( dog => {
            if(dog.name === dogId.name) {
                dog.hasBeenLiked = true
            }
        })
    }
    swipedDog(dogId) {
        dogs.forEach( dog => {
            if(dog.name === dogId.name) {
                dog.hasBeenSwiped = true
            }
        })
    }

    getNewDogArray() {
        let newDogArray = []
        
        dogs.forEach( dog => {
            if(!dog.hasBeenLiked && !dog.hasBeenSwiped) {
                newDogArray.push(dog)
            }
        })
        return newDogArray        
    }    
}
export default Dog