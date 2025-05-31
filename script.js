// script.js
document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    
    keys.forEach(key => {
        key.addEventListener("click", () => playSound(key.dataset.key));
    });

    document.addEventListener("keydown", (event) => {
        playSound(event.keyCode);
    });

    const element1 = document.querySelector('.key');
    function disableHoverEffects(){
        element1.classList.add('disable-hover')
    }

    // const element = document.getElementById('key');

    function playSound(keyCode) {
        let audio;

        if((keyCode==65) || event.key === 'a' || event.key==='A' ){
            const element = document.getElementById('key1');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key01.mp3")
            disableHoverEffects();

        }else if((keyCode==83) || event.key === 's' || event.key === 'S'){
            const element = document.getElementById('key2');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key02.mp3")

        }else if((keyCode==68) || event.key === 'd' || event.key === 'D'){
            const element = document.getElementById('key3');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key03.mp3")

        }else if((keyCode==70 ) || event.key === 'f' || event.key === 'F'){
            const element = document.getElementById('key4');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key04.mp3")

        }else if((keyCode==71) || event.key === 'g' || event.key === 'G'){
            const element = document.getElementById('key5');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key05.mp3")

        }else if((keyCode==72) || event.key === 'h' || event.key === 'H'){
            const element = document.getElementById('key6');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key06.mp3")

        }else if((keyCode==74) || event.key === 'j' || event.key === 'J'){
            const element = document.getElementById('key7');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key07.mp3")

        }else if((keyCode==75) || event.key === 'k' || event.key === 'K'){
            const element = document.getElementById('key8');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            audio = new Audio("ads/key08.mp3")

        }

        audio.play();
    }
});