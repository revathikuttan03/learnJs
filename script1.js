let ml = 0


document.addEventListener("keypress",(m)=>{
    console.log(m.key)
    if (m.key == "m"){
        document.getElementById("d1").style.backgroundColor = "red"

    }
    else if (m.key == "k"){
    
        document.getElementById("d1").style.backgroundColor = "green"
    }
    else {
        document.getElementById("d1").style.backgroundColor = "blue"
    }
    
})


document.addEventListener("keydown",(e)=>{
    console.log("key dow working",e.key)
    if (e.key === "ArrowRight"){
        ml += 10
        
       document.getElementById("d2").style.marginLeft = `${ml}px`;
       document.getElementById("d2").classList.remove("img-flip")
    }   
   else if (e.key === "ArrowLeft"){
        ml -= 10
       document.getElementById("d2").style.marginLeft = `${ml}px` ;
       document.getElementById("d2").classList.add("img-flip")}
})
let d3 = document.getElementById('d3')
document.addEventListener("mousemove",(e)=>{
    
    d3.style = `margin-left:${e.clientX-50}px;margin-top:${e.clientY-50}px`
    
})

