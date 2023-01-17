// +7(951)188-97-07

const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const regExp = /^\+7\(9\d{2}\)\d{3}-\d{2}-\d{2}$/;
button.addEventListener("click", () => {
    if (regExp.test(input.value)) {
        result.innerHTML = "Вы ввели верный номер";
        result.style.color = "green";
    } else {
        result.innerHTML = "Вы ввели неверный номер";
        result.style.color = "red";
    }
});

///////////////////////////////////////////////////////


const btn_block = document.getElementById("btn_block");
const box = document.querySelector(".box");
let i = 0;
btn_block.addEventListener("click", () => {
    function startDrive() {
        setTimeout(() => {
            i += 30;
            // box.style.left = `${i}px`;
            box.style.left = i + "px";
            if (i < 450) {
                startDrive();
            }
        }, 100);
    }
    startDrive();
});

const btn_restart = document.querySelector("#btn_restart");
btn_restart.addEventListener("click", () => {
    location.reload();
});
