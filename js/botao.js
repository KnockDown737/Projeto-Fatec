    
    /*///////////////////////// BOTAO 1 ///////////////////////////////////*/
    
    const btn = document.querySelector('.btn');
    const clip = document.querySelector('.clip');
    const close = document.querySelector('.close');
    const video = document.querySelector('Video');
    btn.onclick = function() {
        btn.classList.add('active');
        clip.classList.add('active');
        video.play();
    }

    close.onclick = function(){
        btn.classList.remove('active');
        clip.classList.remove('active')
        video.pause();
    }

/*///////////////////////////////// BOTÃO 2 /////////////////////////////////*/

    const btn2 = document.querySelector('.btn2');
    const clip2 = document.querySelector('.clip2');
    const close2 = document.querySelector('.close2');
    const video2 = document.querySelector('.video2');
    btn2.onclick = function() {
        btn2.classList.add('active2');
        clip2.classList.add('active2');
        video2.play();

        /*video2.play();*/
    }

    close2.onclick = function(){
        btn2.classList.remove('active2');
        clip2.classList.remove('active2')
        video2.pause();
        /*video2.pause();*/
    }

/*/////////////////////////////// BOTÃO 3//////////////////////////////*/


    const btn3 = document.querySelector('.btn3');
    const clip3 = document.querySelector('.clip3');
    const close3 = document.querySelector('.close3');
    const video3 = document.querySelector('.video3');
    btn3.onclick = function() {
        btn3.classList.add('active3');
        clip3.classList.add('active3');
        video3.play();

        /*video2.play();*/
    }

    close3.onclick = function(){
        btn3.classList.remove('active3');
        clip3.classList.remove('active3')
        video3.pause();
    }