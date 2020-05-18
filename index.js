function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio){
        return;
    }else{
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}
function removeTransition(e){
    if(e.propertyName!='transform'){
        return;
    }else{
        console.log(this);
        this.classList.remove('playing');
    }
}

const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)
