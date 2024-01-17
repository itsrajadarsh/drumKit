
for (var i =0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // this.style.color="white";
        var a=this.innerHTML;
        makeSound(a);
        pressed(a);
    })
}

//add event listener for the key presses
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    pressed(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds\\tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds\\tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds\\tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds\\tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds\\crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds\\kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds\\snare.mp3');
            audio.play();
            break;
        default:
            console.log("some unknown key has been pressed "+key)
    }
}

function pressed(key){
    var button = document.querySelector("." + key);
    // alert(key)
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed")
        }, 100)
}