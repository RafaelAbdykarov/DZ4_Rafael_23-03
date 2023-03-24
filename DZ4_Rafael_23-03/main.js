const wrapper = document.querySelector(".wrapper")
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'people.json')
    request.setRequestHeader('Content-type', "application/json")
    request.send()
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        data.forEach(person => {
            const div = document.createElement("div")
            div.innerHTML = `
                <h2>Name: ${person.name}</h2>
                <span>Age: ${person.age}</span>
            `
            wrapper.append(div)
        })
    })
})