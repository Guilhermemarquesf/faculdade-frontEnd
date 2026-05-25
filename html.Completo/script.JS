function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light')

    //pegar a imagem img
    const img = document.querySelector('#profile img');

    //substituir a imagem
    if (html.classList.contains('light')) {
       //se tiver liht mode, adicionar a imagem light 
       img.setAttribute('src', './guigui.jpeg');
    } else {
        //se tiver sem light mode, manter a imagem normal 
        img.setAttribute('src', './guigui2.jpeg');

    }

}    

  

    