console.log('Day-1');


document.addEventListener("keydown", playSound);

const allButtons = document.querySelectorAll('.key');

allButtons.forEach(key => key.addEventListener('click', playSoundClick, true));
// document.addEventListener("click", playSoundClick, true);

// fucntion to play specific sound based in the seleceted key
function playSound(e) {

    // Get the letter pressed by the key to smallCase
    const keySmall = (e.key).toLowerCase();

    // select the audio file related to the pressed key/letter
    const audio = document.querySelector(`audio[data-key="${keySmall}"]`);
    if (!audio) return; // if not one of the avaibale audio, do nothing

    // restart the audio when press the key amny times
    audio.currentTime = 0;
    // play the sound
    audio.play();

    // select the element according to the pressed key
    const key = document.querySelector(`.key[data-key="${keySmall}"]`);
    // in case we want accept letters only:

    // if (e.getModifierState("CapsLock")) {
    //     alert("Please disable CapsLock")
    // }

    // add 'playing' class to the selecetd elemnt
    key.classList.add('playing');
}


// fucntion to play specific sound based in the seleceted key
function playSoundClick(e) {

    let clickedButtonkey = undefined;
    if (e.target.dataset.key == undefined) {

        // console.log(e.target.parentElement.dataset.key);
        clickedButtonkey = e.target.parentElement.dataset.key;
        // console.log(clickedButtonkey);
    } else {
        clickedButtonkey = e.target.dataset.key;
        // console.log(clickedButtonkey);

    }

    const audio = document.querySelector(`audio[data-key="${clickedButtonkey}"]`);
    // console.log(audio);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    // select the element according to the pressed key
    const key = document.querySelector(`.key[data-key="${clickedButtonkey}"]`);
    key.classList.add('playing');

}

// function to remove the 'playing' class after the Transition ends
function removeTrsnsition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

// get all elements with class 'key'
const keys = document.querySelectorAll('.key');

// add event listener to all elemnts to remove the class 'playing'
// after the Transition ends
keys.forEach(key => key.addEventListener('transitionend', removeTrsnsition));


console.log("End day-1 ");






