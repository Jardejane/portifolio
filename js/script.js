console.log('ola js para web')

let imagem = document.getElementById("gif-js")

imagem.addEventListener("mouseover",function(){
    let srcimage = imagem.src
    if(!imagem.src.includes("gif2")){
        imagem.src = "../portifolio-/img/gif2.png"
        imagem.style.padding
    }else{
        imagem.src = "../portifolio-/img/gif.png"

    }
})




// codigo que deram erro

// let imagem = document.getElementById("gif");
// function mouseOver(){
//     document.getElementById("gif")
//     imagem.src = "../portifolio-/img/gif.png"
// }
// function mouseOut(){
//     document.getElementById("gif").innerHTML = "../portifolio-/img/gif2.png"
// }


// imagem.addEventListener("click",function(){
//    imagem.src = "../portifolio-/img/gif2.png"

// })
// console.log(img.src)
// function mouseOver(){
    
// }


// function mouseOver(){
//     document.getElementById("gif").innerHTML = "meu deus"
// }
// function mouseOut(){
//     document.getElementById("gif").innerHTML = "jane perfeita"
// }