let scoreA = 0
function changeGoalA() {
    var userInput = prompt("Gol sayısını giriniz");
    
    if (isValidNumber(userInput)) {
        scoreA = parseInt(userInput);
        document.getElementById("scoreA").innerText = scoreA;
    } else {
        alert("Lütfen geçerli bir sayı girin.");
    }
}
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}
let scoreB = 0
function changeGoalB() {
    var userInput = prompt("Gol sayısını giriniz");

    if (isValidNumber(userInput)) {
        scoreB = parseInt(userInput);
        document.getElementById("scoreB").innerText = scoreB;
    } else {
        alert("Lütfen geçerli bir sayı girin.");
    }
}
let TeamA = TeamA
function changeTeamA() {
    teamA = prompt("Takım İsmi Giriniz")
    document.getElementById("teamA").innerText = teamA
}
let TeamB = TeamB
function changeTeamB() {
    teamB = prompt("Takım İsmi Giriniz")
    document.getElementById("teamB").innerText = teamB
}