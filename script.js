
let xp = 0;
let gold = 0;

function completeQuest() {
    xp += 10;
    gold += 5;
    document.getElementById("xp").innerText = xp;
    document.getElementById("gold").innerText = gold;
}

function equipWeapon() {
    alert("무기가 장착되었습니다!");
}
