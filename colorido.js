let quadrado = document.querySelector(".quadrado")
let body = document.querySelector("body")
let cores = [
    " none",
    " red",
    " lime",
    " green",
    "lightblue",
    " blue",
    " orange",
    "tomato",
    " darkblue",
    " silver",
    " purple",
    " brown",
    " gray",
    "lightgreen",
    " black",
    " pink"
]
let contar = 0
let cor = cores
quadrado.addEventListener("mouseenter",()=>{
contar +=1
console.log(contar)
quadrado.textContent = cor[contar]
quadrado.style = "background-color:"+cor[contar] 
body.style = "background-color:"+cor[contar] 
if(contar == 15){
    contar -=15
}
})
quadrado.addEventListener("mouseout",()=>{
    contar +=1
    quadrado.style = "background-color:"+cor[contar] 
    quadrado.textContent = cor[contar]
    body.style = "background-color:"+cor[contar] 
    console.log(contar)
    if(contar == 15){
        contar -=15
    }
    })
    quadrado.addEventListener("click",()=>{
        contar =0
        quadrado.style = "background-color:"+cor[contar] 
        quadrado.textContent = cor[contar]
        body.style = "background-color:"+cor[contar] 
        console.log(contar)
        if(contar == 15){
            contar -=15
        }
        })