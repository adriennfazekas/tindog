class Dogs {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, age, avatar, bio} = this
        return ` 
                <img class="dog-picture" src=${avatar}>
                <div class="profile-data">${name}, ${age}</div>
                <div class="profile-bio">${bio}</div>
            `
    }
}
export default Dogs