function getPlayerName(){
    let playerName = document.querySelector('#players-dropdown').value
    return playerName;
}

function dropdown(imgid, year){
    let playerName = getPlayerName();
    document.getElementById(imgid).src = "../Images/" + playerName + "_" + year + ".jpeg"
}

