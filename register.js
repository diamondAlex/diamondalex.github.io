let img = ""
let username = ""
let root = document.getElementById("root")
root.classList.add("root")

let container = document.createElement("div")

function selectImage(){
    document.getElementById('name').innerHTML = "Alexandre Diamond"
    container.innerHTML = "Select an Image"

    let div = document.createElement("div")
    div.classList.add("grid")

    for(i=0;i<100;i++){
        let img = document.createElement("img") 
        img.src = "pfp.jpeg"
        img.classList.add("pfp","grid-item")
        img.addEventListener("click", () =>{
            let new_img = document.getElementById("pfp") 
            new_img.src = "pfp.jpeg"
            window.location.href = "index.html"
        })
        div.appendChild(img)
    }
    container.appendChild(div)

    //let button = document.createElement("button")
    //button.innerHTML = "confirm"
    //button.onclick = selectImage
}

let init = [
    function displayMenu(){
        let navbar = document.createElement("div")
        navbar.classList.add("navbar")
        root.appendChild(navbar)

        let pfp
        if(img != ""){
            pfp = document.createElement("img")
            pfp.classList.add("pfp")
            pfp.src = "pfp.jpeg"
        }else{
            pfp = document.createElement("img")
            pfp.classList.add("pfp")
            pfp.id = "pfp"
            pfp.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
        }

        let title = document.createElement("div")
        title.classList.add("title")
        title.appendChild(pfp)
        navbar.appendChild(title)

        let name = document.createElement("div")
        name.classList.add("name")
        name.id = "name"
        if(username == ""){
            name.innerHTML = "Account Creation"
        }else{
            name.innerHTML = "Alexandre Diamond"
        }
        title.appendChild(name)

        let list = document.createElement("div")
        list.classList.add("list")
        navbar.appendChild(list)
    },
    function addContainer(){
        root.appendChild(container)
        container.classList.add("container")

        let input = document.createElement("select")

        for(i=0;i<100;i++){
            let option = document.createElement("option") 
            option.innerHTML = "Alexandre Diamond"
            input.appendChild(option)
        }
        container.appendChild(input)

        let button = document.createElement("button")
        button.innerHTML = "confirm"
        button.onclick = selectImage
        container.appendChild(button)


    }
]


init.forEach((f) => f())
