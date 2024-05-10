const iconRotate = document.getElementById('rotate');
const gameContainer = document.getElementById("game-container");
const resetButton = document.getElementById("reset-button");
const gameWineBar = document.getElementById("game-wine-bar");
const palyerTarn = document.getElementById("player_tarn");

const winPetarn = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const grid = [];

let isTarnXuser = true;


const findWin = () => {
    for(let i = 0; i < winPetarn.length; i++) {
        const [a, b, c] = winPetarn[i];
        if(grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
            return grid[a];
        }
    }
    return null;
}


const resetGame = () => {
    for(let i = 0; i < 9; i++) {
        const button = document.getElementById(i);
        grid[i] = undefined;
        button.innerText = '';
        button.disabled = false;
        button.style.backgroundColor = "#7077A1";
    }
    isTarnXuser = true;
    gameWineBar.style.visibility = "hidden";
    palyerTarn.style.visibility = "visible";
    palyerTarn.innerHTML = "It's the X turn"
}

const setAllbuttonDefault = () => {
    for(let i = 0; i < 9; i++) {
        const button = document.getElementById(i);
        button.disabled = true;
    }
}

gameContainer.addEventListener("click", (e) => {
    if(e.target.className === "game-container") {
        return;
    }
    if(isTarnXuser) {
        e.target.innerText = 'X';
        isTarnXuser = false;
        grid[e.target.id] = 'X';

        palyerTarn.innerHTML = "It's the O turn"

        if(findWin() === 'X') {
            setAllbuttonDefault();
            palyerTarn.style.visibility = "hidden";
            gameWineBar.style.visibility = "visible";
            gameWineBar.innerHTML = `
                END GAME!!
                <span id="win-massege">The winner is: X</span>
            `;
            return;
        }

    } else {
        e.target.innerText = 'O';
        isTarnXuser = true;
        grid[e.target.id] = 'O';
        palyerTarn.innerHTML = "It's the X turn"
        if(findWin() === 'O') {
            setAllbuttonDefault();
            palyerTarn.style.visibility = "hidden";
            gameWineBar.style.visibility = "visible";
            gameWineBar.innerHTML = `
                END GAME!!
                <span id="win-massege">The winner is: O</span>
            `;
            return;
        }
    }
    e.target.disabled = true;
    e.target.style.backgroundColor = "#435B66";
});