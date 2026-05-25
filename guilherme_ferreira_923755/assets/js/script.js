const dados={

jogadores:[

{

id:1,

nome:"Kylian Mbappé",

overall:91,

posicao:"ATA",

clube:"Real Madrid",

idade:27,

descricao:"Velocidade e finalização impressionantes.",

destaque:true,

imagem:"https://images.unsplash.com/photo-1574629810360-7efbbe195018",

fotos:[

{

titulo:"Mbappé",

imagem:"https://images.unsplash.com/photo-1574629810360-7efbbe195018"

},

{

titulo:"Carta Ultimate Team",

imagem:"https://images.unsplash.com/photo-1517466787929-bc90951d0974"

}

]

},

{

id:2,

nome:"Erling Haaland",

overall:91,

posicao:"ATA",

clube:"Manchester City",

idade:25,

descricao:"Centroavante extremamente forte.",

destaque:true,

imagem:"https://images.unsplash.com/photo-1486286701208-1d58e9338013",

fotos:[

{

titulo:"Haaland",

imagem:"https://images.unsplash.com/photo-1486286701208-1d58e9338013"

}

]

},

{

id:3,

nome:"Vinicius Junior",

overall:90,

posicao:"PE",

clube:"Real Madrid",

idade:25,

descricao:"Dribles rápidos e explosão.",

destaque:false,

imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIu51EYd7SRaucqJWM3PPNYaHRvJbpBTvTA&s",

fotos:[

{

titulo:"Vini Jr",

imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIu51EYd7SRaucqJWM3PPNYaHRvJbpBTvTA&s"

}

]

}

]

}


if(document.getElementById("carousel")){

montarHome()

}

if(document.getElementById("detalhes")){

montarDetalhes()

}



function montarHome(){

let destaque=dados.jogadores.filter(x=>x.destaque)

let carousel=""


destaque.forEach((j,index)=>{

carousel+=`

<div class="carousel-item ${index==0?"active":""}">

<img src="${j.imagem}"

class="d-block w-100">

<div class="carousel-caption">

<h3>${j.nome}</h3>

<p>${j.descricao}</p>

</div>

</div>

`

})

document.getElementById("carousel").innerHTML=carousel


let cards=""

dados.jogadores.forEach(j=>{

cards+=`

<div class="col-md-4 mb-4">

<div class="card">

<img src="${j.imagem}">

<div class="card-body">

<h5>${j.nome}</h5>

<p>${j.descricao}</p>

<a href="detalhe.html?id=${j.id}"

class="btn btn-success">

Ver detalhes

</a>

</div>

</div>

</div>

`

})

document.getElementById("cards").innerHTML=cards

}



function montarDetalhes(){

let parametros=new URLSearchParams(window.location.search)

let id=parametros.get("id")

let jogador=dados.jogadores.find(x=>x.id==id)

document.getElementById("detalhes").innerHTML=`

<div class="detalhe">

<img src="${jogador.imagem}" class="img-fluid">

<h1>${jogador.nome}</h1>

<p><b>Overall:</b> ${jogador.overall}</p>

<p><b>Posição:</b> ${jogador.posicao}</p>

<p><b>Clube:</b> ${jogador.clube}</p>

<p><b>Idade:</b> ${jogador.idade}</p>

<p>${jogador.descricao}</p>

</div>

`

let fotos=""

jogador.fotos.forEach(f=>{

fotos+=`

<div class="col-md-4">

<div class="card">

<img src="${f.imagem}">

<div class="card-body">

<h5>${f.titulo}</h5>

</div>

</div>

</div>

`

})

document.getElementById("fotos").innerHTML=fotos

}