const desc = ["Developer","Ui/Ux Designer","Freelancer","entrepreneur"];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const pauseBetweenTexts = 2000; 

function type() {
    if (charIndex < desc[textIndex].length) {
        document.getElementById("desc").innerHTML += desc[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        document.getElementById("desc").innerHTML = desc[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        textIndex = (textIndex + 1); 
        if(textIndex==4){
            textIndex=0;
        }
        charIndex = 0;
        setTimeout(type, typingSpeed);
    }
}

window.onload = type;

