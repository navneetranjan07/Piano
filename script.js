// script.js
document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    
    keys.forEach(key => {
        key.addEventListener("click", () => playSound(key.dataset.key));
    });

    document.addEventListener("keydown", (event) => {
        playSound(event.keyCode);
    });

    function playSound(keyCode) {
        let audio;
        if(keyCode==65){
            audio = new Audio("ads/key01.mp3")
        }else if(keyCode==83){
            audio = new Audio("ads/key02.mp3")
        }else if(keyCode==68){
            audio = new Audio("ads/key03.mp3")
        }else if(keyCode==70){
            audio = new Audio("ads/key04.mp3")
        }else if(keyCode==71){
            audio = new Audio("ads/key05.mp3")
        }else if(keyCode==72){
            audio = new Audio("ads/key06.mp3")
        }else if(keyCode==74){
            audio = new Audio("ads/key07.mp3")
        }else if(keyCode==75){
            audio = new Audio("ads/key08.mp3")
        }

        audio.play();
    }
});