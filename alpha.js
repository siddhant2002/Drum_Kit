
function chopa(e)
{
    var key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)
    {
        return;
    }
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing'); 
}

function remove(e)
{
    if(e.propertyName!=="transform")
    {
        return;
    }
    this.classList.remove('playing');
}
var keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',remove));
window.addEventListener('keydown',chopa);