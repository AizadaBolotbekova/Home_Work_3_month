const block = document.querySelector(".block");
let positionX = 0;
let positionY = 0;
let positionX_true = false;
let positionX_false = false;
let start = 1;

const move = () => {
  if (start === 1) {
    if (positionX_true === false && positionX <= 440) {
      positionX += 15;
      block.style.left = `${positionX}px`;
      setTimeout(move, 10);
    } else if (positionX >= 440 && positionY <= 440) {
      positionY += 15;
      block.style.top = `${positionY}px`;
      setTimeout(move, 10);
    } else if (positionX > 0 && positionY >= 440) {
      positionX_true = true;
      positionX -= 15;
      block.style.left = `${positionX}px`;
      setTimeout(move, 10);
    } else if (positionX_false === false && positionY > 0) {
      if (positionY === 10) positionX_true = false;
      positionY -= 10;
      block.style.top = `${positionY}px`;
      setTimeout(move, 10);
    }
  }
};
move();
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const newTime = document.querySelector("#p_time");
const btn = document.querySelector("#btn")
const btn_stop = document.querySelector("#btn_stop")

let i = 0;

btn.addEventListener("click",()=>{
  const time = setInterval(() => {
    i++;
    newTime.innerHTML = i;

  }, 100);
  btn_stop.addEventListener("click",()=>{
    clearInterval(time)
  })
})
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//
// setTimeout(()=>{
//     console.log("Hello world")
// },50000)
//
// setInterval(()=>{
//     console.log("Hello world")
// },1000)

/////////////////////////////////////////////////////////////////

// const block = document.querySelector(".block");
//
// let positionX_start = 0;
// let positionY_start = 0;
// let positionX_end = 448;
// let positionY_end = 448;
//
// const move = () => {
//     //////////// // block.style.left = 50+"px";
//     ////////////// block.style.left = `${250}px`
//     if (positionX_start <= 440) {
//         positionX_start = positionX_start + 15;
//         block.style.left = `${positionX_start}px `;
//         setTimeout(move, 45);
//     } else if (positionX_start >= 440 && positionY_start <= 440) {
//         positionY_start += 15;
//         block.style.top = `${positionY_start}px`;
//         setTimeout(move, 42);
//     } else if (positionX_end > 0) {
//         positionX_end -= 15;
//         block.style.left = `${positionX_end}px`;
//         setTimeout(move, 40);
//     } else if (positionY_end > 0) {
//         positionY_end -= 15;
//         block.style.top = `${positionY_end}px`;
//         setTimeout(move, 40);
//     }
// };
// move();

