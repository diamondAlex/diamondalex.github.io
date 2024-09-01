let root = document.getElementById("root")
root.classList.add("root")

let container = document.createElement("div")
container.id = "container"

let front_div = document.createElement("div")
root.appendChild(front_div)
front_div.classList.add("front")


function Socials(e){
    e.preventDefault()
    container.innerHTML = `
    <div class="socials">
        <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
        <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
        </svg>
        <a href="https://github.com/diamondAlex"> Github </a><br/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
        <a href="https://linkedin.com/in/alexandre-diamond-627846115/"> Linkedin </a><br/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
        <a href="https://www.linkedin.com/company/diamond-consulting-dev"> Linkedin - Diamond Consulting </a><br/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
        <a href="https://x.com/L33tHaxxor4lyf"> Twitter </a><br/>
        <img width="25px" height="25px" src="logo.png"></img>
        <a href="https://www.diamondconsulting.dev/"> Diamond Consulting </a><br/>
    </div>
    `
}

function CV(e){
    e.preventDefault()
    container.innerHTML = `
    <div style="font-size:110%">
    <span style="font-size:150%"> Alexandre Diamond <br></span>
    <br/>
    <span style="font-size:120%"> Experience <br></span>
    <br/>
    Jogogo - Software Engineer </br>
        <li style="margin-left:10%"> 
            Worked on a Nodejs served REST api in 
            Javascript.
        </li>
        <li style="margin-left:10%"> 
            Helped with maintaining and developping
            a database system in Postgres.
        </li>
        <li style="margin-left:10%">
            Helped in the development of a Distributed
            Cassandra database.
        </li>
        <li style="margin-left:10%">
            Contributed to the development of a 
            GraphQL API in Typescript.
        </li>
        <li style="margin-left:10%">
            Work included : Git, Google Cloud, Linux, Docker,
            Kubernetes, Kafka.
        </li>

    <br/>
    Intact Investment Management<br>
        <li style="margin-left:10%"> 
            Created a full stack application to model
            financial constraints and generate reports.
        </li>
        <li style="margin-left:10%"> 
            Developped backend applications in C# with
            front end web GUI in React.
        </li>
        <li style="margin-left:10%">
            Developped C# dlls for data delivery to 
            Excel spreadsheets.
        </li>
        <li style="margin-left:10%">
            Developped VBA applications.
        </li>
        <li style="margin-left:10%">
            Supported and troubleshooted existing
            Microsoft Excel macros and spreadsheets.
        </li>
        <li style="margin-left:10%">
            Work included : Oracle, MS SQL server, TFS, 
            ASP.NET, PSQL.
        </li>
    languages <br>
        <li style="margin-left:10%">
            French - fluent
        </li>
        <li style="margin-left:10%">
            English - fluent
        </li>
    Skills 
        <div style="margin-left:10%">
        <br><span style="font-weight:bold">Languages:</span> Javascript, Typescript, Python , C, C++, Rust, Go, Lua, Bash.
        <br><span style="font-weight:bold">OS:</span> Linux (arch/ubuntu), Windows
        <br><span style="font-weight:bold">Editor:</span> Vim, Neovim, VScode
        <br><span style="font-weight:bold">Cloud:</span> Google Cloud, AWS
        <br><span style="font-weight:bold">Utilities </span>and libs: SSH, FFMPEG, GIMP, SDL2, Raylib.
        <br><span style="font-weight:bold">Fields:</span> Web applications, Database design, data reporting, automated tooling, scripts, networking
        </div>

    </div>
    `
}

function Contact(e){
    e.preventDefault()
    container.innerHTML = ''
    let div = document.createElement("div") 
    container.appendChild(div)
    div.innerHTML = "AlexandreDiamond@protonmail.com"
}

function Material(e){
    e.preventDefault()
    container.innerHTML = ''
    let div = document.createElement("div") 
    container.appendChild(div)
    div.innerHTML = "under construction :)"
}

function Projects(e){
    e.preventDefault()
    container.innerHTML = ''
    let div = document.createElement("div") 
    container.appendChild(div)
    let text = document.createElement("div") 
    text.innerHTML = "MediaPlayer - A media... player? <br/>"
    div.appendChild(text)
    let img = document.createElement("img")
    img.addEventListener('click', () =>{
          window.open("https://github.com/diamondAlex/MediaPlayer", '_blank').focus();
    })
    img.src = "out1.gif"
    div.appendChild(img)
    let text2 = document.createElement("div") 
    text2.innerHTML = "<br/> A web browser game. Battler and idler<br/>"
    div.appendChild(text2)
    let img2 = document.createElement("img")
    img2.src = "out2.gif"
    img2.addEventListener('click', () =>{
          window.open("https://github.com/diamondAlex/battler", '_blank').focus();
    })
    div.appendChild(img2)
    let text3 = document.createElement("div") 
    text3.innerHTML = "<br/> Notzar - A tracking and efficiency app. <br/>"
    div.appendChild(text3)
    let img3 = document.createElement("img")
    img3.src = "out3.gif"
    img3.addEventListener('click', () =>{
          window.open("https://github.com/diamondAlex/Notzar", '_blank').focus();
    })
    div.appendChild(img3)
    
    let text4 = document.createElement("div") 
    text4.innerHTML = "<br/> Zhengyi - A simple blog. <br/>"
    div.appendChild(text4)
    let img4 = document.createElement("img")
    img4.src = "out5.gif"
    img4.addEventListener('click', () =>{
          window.open("https://github.com/diamondAlex/Zhengyi", '_blank').focus();
    })
    div.appendChild(img4)

    let text5 = document.createElement("div") 
    text5.innerHTML = "<br/> Praxis - A chess practice tool. <br/>"
    div.appendChild(text5)
    let img5 = document.createElement("img")
    img5.src = "out6.gif"
    img5.addEventListener('click', () =>{
          window.open("https://github.com/diamondAlex/Praxis", '_blank').focus();
    })
    div.appendChild(img5)

    let text6 = document.createElement("div") 
    text6.innerHTML = "<br/> td, a todo finder cli util <br/>"
    div.appendChild(text6)
    let img6 = document.createElement("img")
    img6.src = "out8.gif"
    img6.addEventListener('click', () =>{
          window.open("https://github.com/diamondAlex/bash_utils", '_blank').focus();
    })
    div.appendChild(img6)
}

let leet = 0

let links = {
    "CV": CV,
    "Projects":Projects,
    "Socials":Socials,
    //"Material":Material,
    "Contact": Contact,
    "Register": () => {},
    "fly": (e) => {
        e.preventDefault()
        document.getElementById("container")
        container.innerHTML = "click on the fly!"
        fly()
    },
    "fire": (e) => {
        e.preventDefault()
        document.getElementById("container")
        container.innerHTML = "click left mouse button to throw fire"
        startFire()
    },
    "L33t": (e) => {
        e.preventDefault()
        let navbar = document.getElementById('navbar')
        navbar.style.color = "white"
        l33t()
    },
}

let init = [
    function displayMenu(){
        let navbar = document.createElement("div")
        navbar.id = 'navbar'
        navbar.classList.add("navbar")
        front_div.appendChild(navbar)

        let pfp = document.createElement("img")
        pfp.classList.add("pfp")
        pfp.src = "pfp.jpeg"

        let title = document.createElement("div")
        title.classList.add("title")
        title.appendChild(pfp)
        navbar.appendChild(title)

        let name = document.createElement("div")
        name.classList.add("name")
        name.innerHTML = "Alexandre Diamond"
        title.appendChild(name)

        let list = document.createElement("div")
        list.classList.add("list")
        navbar.appendChild(list)

        Object.keys(links).forEach((name) => {
            let nav = document.createElement("a")
            nav.classList.add("nav_element")
            nav.innerHTML = name
            nav.addEventListener('click', links[name])
            nav.href = name.toLowerCase() + ".html"
            list.appendChild(nav)
        })
        
    },
    function addContainer(){
        front_div.appendChild(container)
        container.classList.add("container")
    }
]


init.forEach((f) => f())
