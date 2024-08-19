let div = document.getElementById("root")
let canvas = document.createElement("canvas")
canvas.style.position = "absolute"
canvas.style.zIndex = "2"
div.appendChild(canvas)

let w = canvas.parentElement.clientWidth
let h = canvas.parentElement.clientHeight
canvas.height = h
canvas.width = w

var ctx = canvas.getContext("2d");

let bx = 300
let by = 300
let sId = 0
let fly_is = 0

window.addEventListener('click', (e) => {
    let x = e.clientX
    let y = e.clientY
    if(fly_is && bx-10 <= x && x <= bx+15 && by-10 <= y && y <= by+15){
        clearInterval(sId);
        killFly()
    }
})

async function killFly(){
    fly_is= 0
    ctx.fillStyle='red'
    ctx.fillRect(bx,by,10,10)
    ctx.fillStyle='red'
    ctx.fillRect(bx-5,by-5,5,5)
    ctx.fillStyle='red'
    ctx.fillRect(bx+10,by-5,5,5)

    await new Promise((resolve) =>{
        setTimeout(()=>{resolve()},100)
    })

    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx,by,10,10)
    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx-5,by-5,5,5)
    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx+10,by-5,5,5)


    ctx.fillStyle='red'
    ctx.fillRect(bx-3,by-3,5,5)
    ctx.fillStyle='red'
    ctx.fillRect(bx+3,by+3,5,5)
    ctx.fillStyle='red'
    ctx.fillRect(bx-7,by-7,5,5)
    ctx.fillStyle='red'
    ctx.fillRect(bx+12,by-7,5,5)
    await new Promise((resolve) =>{
        setTimeout(()=>{resolve()},100)
    })

    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx-3,by-3,5,5)
    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx+3,by+3,5,5)
    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx-7,by-7,5,5)
    ctx.fillStyle='rgb(189, 187, 187)'
    ctx.fillRect(bx+12,by-7,5,5)
}

function fly(){
    fly_is = 1
    function drawBug(){
        ctx.fillStyle='rgb(189, 187, 187)'
        ctx.fillRect(bx,by,10,10)
        ctx.fillStyle='rgb(189, 187, 187)'
        ctx.fillRect(bx-5,by-5,5,5)
        ctx.fillStyle='rgb(189, 187, 187)'
        ctx.fillRect(bx+10,by-5,5,5)
        let x = 15 - Math.floor(Math.random()*30)
        let y = 15 - Math.floor(Math.random()*30)
        bx+=x
        by+=y
        ctx.fillStyle='black'
        ctx.fillRect(bx,by,10,10)
        ctx.fillStyle='black'
        ctx.fillRect(bx-5,by-5,5,5)
        ctx.fillStyle='black'
        ctx.fillRect(bx+10,by-5,5,5)
    }
    
    sId = setInterval(drawBug, 100)
}

function l33t(){
    function drawBg(){
        ctx.fillStyle = "black"
        ctx.fillRect(0,0,w,h)
    }

    let row = []

    function matrix(){
        row = []
        for(let i=0;i<(w/5);i++){
            let odd = Math.floor(Math.random()*50)
            if(odd >= 47){
                row.push(1)
            }
            else{
                row.push(0)
            }
        }
    }

    let j = 0
    function drawMat(){
        matrix()
        let i = 0;
        for(s of row){
            let y = j%(h/5)
            if(s == 1){
                ctx.fillStyle='rgb(66, 245, 105)'
                ctx.fillRect(i*5,y*5,5,5)
            }else{
                ctx.fillStyle='black'
                ctx.fillRect(i*5,y*5,5,5)
            }
            i++
        }
        j++
    }


    drawBg()
    setInterval(drawMat, 100)
}
