document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    
    keys.forEach(key => {
        key.addEventListener("click", () => playSound(key.dataset.key));
    });

    document.addEventListener("keydown", (event) => {
        playSound(event.keyCode);
    });

    // const element1 = document.querySelector('.key');
    // function disableHoverEffects(){
    //     element1.classList.add('disable-hover')
    // }
    // const element2 = document.querySelector('.key');
    // function enableHoverEffects(){
    //      element2.classList.add('enable-hover')
    // }
// enableHoverEffects();
// disableHoverEffects();
    
    function playSound(keyCode) {
        let audio;

   

        if((keyCode==65) || event.key === 'a' || event.key==='A' ){
            audio = new Audio("ads/key01.mp3")
            const element = document.getElementById('key1');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
                        
            

        }else if((keyCode==83) || event.key === 's' || event.key === 'S'){
            audio = new Audio("ads/key02.mp3")
            const element = document.getElementById('key2');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            

        }else if((keyCode==68) || event.key === 'd' || event.key === 'D'){
            audio = new Audio("ads/key03.mp3")
            const element = document.getElementById('key3');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            

        }else if((keyCode==70 ) || event.key === 'f' || event.key === 'F'){
             audio = new Audio("ads/key04.mp3")
            const element = document.getElementById('key4');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
           

        }else if((keyCode==71) || event.key === 'g' || event.key === 'G'){
            audio = new Audio("ads/key05.mp3")
            const element = document.getElementById('key5');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            

        }else if((keyCode==72) || event.key === 'h' || event.key === 'H'){
            audio = new Audio("ads/key06.mp3")
            const element = document.getElementById('key6');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            

        }else if((keyCode==74) || event.key === 'j' || event.key === 'J'){
            audio = new Audio("ads/key07.mp3")
            const element = document.getElementById('key7');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
            

        }else if((keyCode==75) || event.key === 'k' || event.key === 'K'){
             audio = new Audio("ads/key08.mp3")
            const element = document.getElementById('key8');
            element.style.transform = 'scale(1.05)'
            element.style.backgroundColor = '#81cfd6'
            setTimeout(() =>{
                element.style.removeProperty("transform")
                element.style.removeProperty("background-color")
            },200)
           

        }
        
        audio.play();
        
    }
});