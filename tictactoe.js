
    let game = document.getElementById("game");
    let gameBoard = "<table>";
    let board = [
    ['*', '*', '*'],
    ['*', '*', '*'],
    ['*', '*', '*']
    ];
    let turn = 0;
    for (let i = 0; i < 3; i++) {
        gameBoard += "<tr>"
            for (let j = 0; j < 3; j++) {
        gameBoard += `<td id='${i}${j}' onclick="play(${i},${j})">${board[i][j]}</td>`;
    }
        gameBoard += "</tr>"
    }
    gameBoard += "</table>"
    game.innerHTML = gameBoard
    function checkWinInColumn() {
    if (board[0][0] !== "*" && board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
    return true;
} else if (board[0][1] !== "*" && board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
    return true
} else if (board[0][2] !== "*" && board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
    return true
} else {
    return false;
}
}
    function checkWinInRow() {
    if (board[0][0] !== "*" && board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
    return true;
} else if (board[1][0] !== "*" && board[1][1] === board[1][0] && board[1][0] === board[1][2]) {
    return true
} else if (board[2][0] !== "*" && board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
    return true
} else {
    return false;
}
}
    function checkWinInPrimary() {
    if(board[0][0] !== "*" && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
    return true;
}
    return false;
}
    function checkWinInSub() {
    if(board[2][0] !== "*" && board[2][0] === board[1][1] && board[0][2] === board[2][0]){
    return true;
}
    return false;
}
    function play(i, j) {
    let id = i + "" + j
    let x = "";
    turn % 2 === 0 ? x = "X" : x = "O";
    board[i][j] = x;
    document.getElementById(id).innerHTML = x;
    let isWin = checkWinInColumn() || checkWinInRow() || checkWinInPrimary() || checkWinInSub();
    if (isWin) {
    alert(x + "Thắng")
}
    turn++;
}
