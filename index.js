// const w_btn = document.querySelector(".w");
// const a_btn = document.querySelector(".a");
// const s_btn = document.querySelector(".s");
// const d_btn = document.querySelector(".d");
// const j_btn = document.querySelector(".j");
// const k_btn = document.querySelector(".k");
// const l_btn = document.querySelector(".l");
// w_btn.addEventListener("click",(evt)=>{
//     let audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//     console.log("w was clicked");
// });
// a_btn.addEventListener("click",(evt)=>{
//     console.log("a was clicked");
// });
// s_btn.addEventListener("click",(evt)=>{
//     console.log("s was clicked");
// });
// d_btn.addEventListener("click",(evt)=>{
//     console.log("d was clicked");
// });
// j_btn.addEventListener("click",(evt)=>{
//     console.log("j was clicked");
// });
// k_btn.addEventListener("click",(evt)=>{
//     console.log("k was clicked");
// });
// l_btn.addEventListener("click",(evt)=>{
//     console.log("l was clicked");
// });

let numofdrums = document.querySelectorAll(".drum").length;
for(let i=0;i<numofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",()=>{
        let btninnerhtml = document.querySelectorAll(".drum")[i].innerText;
        switch (btninnerhtml) {
            case "w":
                buttonAnimation(btninnerhtml);
                let audio1 = new Audio("sounds/tom-1.mp3");
                audio1.play();
                break;
            case "a":
                buttonAnimation(btninnerhtml);
                let audio2 = new Audio("sounds/tom-2.mp3");
                audio2.play();
                break;
            case "s":
                buttonAnimation(btninnerhtml);
                let audio3 = new Audio("sounds/tom-3.mp3");
                audio3.play();
                break;
            case "d":
                buttonAnimation(btninnerhtml);
                let audio4 = new Audio("sounds/tom-4.mp3");
                audio4.play();
                break;
            case "j":
                buttonAnimation(btninnerhtml);
                let audio5 = new Audio("sounds/crash.mp3");
                audio5.play();
                break;
            case "k":
                buttonAnimation(btninnerhtml);
                let audio6 = new Audio("sounds/kick-bass.mp3");
                audio6.play();
                break;
            case "l":
                buttonAnimation(btninnerhtml);
                let audio7 = new Audio("sounds/snare.mp3");
                audio7.play();
                break;
            default:
        }
    });
};

document.addEventListener("keydown",(evt)=>{
    let keyPressed = evt.key;
    switch (keyPressed) {
        case "w":
            buttonAnimation(keyPressed);
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            buttonAnimation(keyPressed);
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            buttonAnimation(keyPressed);
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            buttonAnimation(keyPressed);
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            buttonAnimation(keyPressed);
            let audio5 = new Audio("sounds/crash.mp3");
            audio5.play();
            break;
        case "k":
            buttonAnimation(keyPressed);
            let audio6 = new Audio("sounds/kick-bass.mp3");
            audio6.play(); 
            break;
        case "l":
            buttonAnimation(keyPressed);
            let audio7 = new Audio("sounds/snare.mp3");
            audio7.play();  
            break;
        default:
    }
});

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },400);
}