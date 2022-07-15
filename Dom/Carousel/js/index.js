const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const slide = document.getElementById("slide");
const imgs = ["./imgs/mac01.jfif", "./imgs/mac02.jfif", "./imgs/mac03.jfif", "./imgs/mac04.jfif", "./imgs/mac05.jfif", "./imgs/mac06.jfif"]
const num = document.getElementById("num");
const go = document.getElementById("go")
const bn1 = document.getElementById("bn1");
const bn2 = document.getElementById("bn2");
const bn3 = document.getElementById("bn3");
const bn4 = document.getElementById("bn4");
const bn5 = document.getElementById("bn5");
const bn6 = document.getElementById("bn6");
const btns = [bn1, bn2, bn3, bn4, bn5, bn6, ]
btns.innerHTML += change1()

function change1() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {
            slide.src = imgs[i]
        })
    }
}

let active = 0;
const changeSlide = (direction) => {
    active += direction;
    if (active < 0) active = imgs.length - 1;
    if (active >= imgs.length) active = 0;
    slide.src = imgs[active];
    console.log(active);
};
btnLeft.onclick = () => changeSlide(-1);
btnRight.onclick = () => changeSlide(1)

go.onclick = function () {
    let input = document.getElementById("num").value;
    for (let i = 0; i < imgs.length; i++) {
        if (input == i + 1) {
            slide.src = imgs[i]
        }
        if (input >= 7 || input <= 0) {
            alert("Please, enter the correct number")
        }
    }
}












// for (let i = 0; i < btns.length; i++) {
//     if (i == active) {
//         btns[i].style.color = 'red'
//     } else {
//         btns[i].style.color = 'black'
//     }
// }






















// function () {   
//     active--;
//     if(active < 0) active = imgs.length -1;
//     slide.src = imgs[active];
//     console.log(active);
// }

// function () {
//     active++;
//     if(active >= imgs.length) active = 0;
//     slide.src = imgs[active];
// };