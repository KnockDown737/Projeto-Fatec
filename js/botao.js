    
    /*///////////////////////// BOTAO 1 ///////////////////////////////////*/
    
    const btn = document.querySelector('.btn');  /*aqui são selecionados os elementos */
    const clip = document.querySelector('.clip');
    const close = document.querySelector('.close'); /*elas são armazenadas nas variaveis const*/
    const video = document.querySelector('Video');

    btn.onclick = function() {        /* quando eu clico no btn (botão), ele ativa a função*/
        btn.classList.add('active');   /* ele adiciona o active (css) */
        clip.classList.add('active');   
        video.play();   /*da play no video*/    /*NOTA: O EVENTO ONCLICK É ATRIBUIDO NO OBJETO */
    }

    close.onclick = function(){        /* quando tu clica no close ele remove o active */
        btn.classList.remove('active');
        clip.classList.remove('active')
        video.pause();       /*ele pausa o video quando o close é clicado */
    }

/*///////////////////////////////// BOTÃO 2 /////////////////////////////////*/

    const btn2 = document.querySelector('.btn2');     /* MESMA DROGA DE CIMA */
    const clip2 = document.querySelector('.clip2');
    const close2 = document.querySelector('.close2');  
    const video2 = document.querySelector('.video2');

    btn2.onclick = function() {             /* MEMA MERDA */
        btn2.classList.add('active2');
        clip2.classList.add('active2');
        video2.play();

        
    }

    close2.onclick = function(){          /* IGUAL A DESGRAÇA DE CIMA */
        btn2.classList.remove('active2');
        clip2.classList.remove('active2')
        video2.pause();
    
    }

/*/////////////////////////////// BOTÃO 3//////////////////////////////*/


    const btn3 = document.querySelector('.btn3');     /* CANSEI, SE VIRA AI */
    const clip3 = document.querySelector('.clip3');
    const close3 = document.querySelector('.close3');
    const video3 = document.querySelector('.video3');

    btn3.onclick = function() {
        btn3.classList.add('active3');
        clip3.classList.add('active3');
        video3.play();

        
    }

    close3.onclick = function(){
        btn3.classList.remove('active3');
        clip3.classList.remove('active3')
        video3.pause();
    }