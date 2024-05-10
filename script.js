const Xuser = document.getElementById('xUser');
const Ouser = document.getElementById('oUser');
const iconRotate = document.getElementById('rotate');
const gameContainer = document.getElementById("game-container");

const winPetarn = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let isTarnXuser = true;

gameContainer.addEventListener("click", (e) => {
    if(e.target.className === "game-container") {
        return;
    }
    if(isTarnXuser) {
        e.target.innerText = 'X';
        isTarnXuser = false;
    } else {
        e.target.innerText = 'O';
        isTarnXuser = true;
    }
    e.target.disabled = true;
    e.target.style.backgroundColor = "#435B66"
})