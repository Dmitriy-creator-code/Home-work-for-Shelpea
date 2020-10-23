

const monsterHP = 100;
const playerHP = 100;




attackBtn.onclick = function lowDamage() {
    const hitMonster = monsterHP - applyMonsterDamage(10);
    const hitPlayer = playerHP - applyPlayerDamage(14);
    if (monsterHealthBar.value === 0) {
        alert ("You win");
        resetGame(monsterHP);
    } else if (playerHealthBar.value === 0) {
        alert ("WASTED");
        resetGame(playerHP);
    }
    
    console.log (monsterHealthBar.value);
    console.log (playerHealthBar.value);
}

strongAttackBtn.onclick = function damageHigh() {
    const hitMonster = monsterHP - applyMonsterDamage(30);
    const hitPlayer = playerHP - applyPlayerDamage(14);
    if (monsterHealthBar.value === 0) {
        alert ("You win");
        resetGame(100);
    } else if (playerHealthBar.value === 0) {
        alert ("WASTED");
        resetGame(100);
    }
}
healBtn.onclick = function useHealth() {
    removeBonusLife();    
    increasePlayerHealth(100);
    playerHP - applyPlayerDamage(25);
    
}

logBtn.onclick = function downLog() {
    alert("выгрузка лога")
}

