document.getElementById("ram").addEventListener("click", go)
let stoptir, tirwidth = 50, tirr;
let headM, headwidth = 620, headheight = 60, head_stop;
tirr = document.getElementById("tir")
headM = document.getElementById("r_head")
function go(){
    stoptir = setInterval(tirgor, 10)
}
let tirgor = () =>{
    tirwidth += 10
    tirr.style.left = tirwidth+"px";

    if(tirwidth == 500){
        clearInterval(stoptir)
        headMoveStart()
    }

}

function headMoveStart(){
    head_stop = setInterval(headMove, 10)
}

let headMove = () =>{
    headwidth += 10
    headheight -=2
    headM.style.left = headwidth+"px"
    headM.style.top = headheight+"px"

    if(headwidth == 1000){
        clearInterval(head_stop)
    }
}