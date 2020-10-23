const monsterHP = 100;
const playerHP = 100;

let data = {};


attackBtn.onclick = function lowDamage() {
    const hitMonster = monsterHP - applyMonsterDamage(10);
    const hitPlayer = playerHP - applyPlayerDamage(14);
    if (monsterHealthBar.value === 0) {
        if(confirm("You win")){        
            alert('сыграем еще раз?')
            resetGame(100);
        } else {
            alert("До скорого!");
        }
        data['You win'] = 'Вы выиграли!!!';        
    } else if (playerHealthBar.value === 0) {
        if(confirm("WASTED")){        
            alert('сыграем еще раз?')
            resetGame(100);
        } else {
            alert("До скорого!");
        }
        data['WASTED'] = 'Вы проиграли!!!';
        }
    data[100 - monsterHealthBar.value] = 'Урон Монстру';
    data[100 - playerHealthBar.value] = 'Урон Игроку';
    
}

strongAttackBtn.onclick = function damageHigh() {
    const hitMonster = monsterHP - applyMonsterDamage(30);
    const hitPlayer = playerHP - applyPlayerDamage(14);
    if (monsterHealthBar.value === 0) {
        if(confirm("You win")){        
            alert('сыграем еще раз?')
            resetGame(100);
        } else {
            alert("До скорого!");
        }
        data['You win'] = 'Вы выиграли!!!';        
    } else if (playerHealthBar.value === 0) {
        if(confirm("WASTED")){        
            alert('сыграем еще раз?')
            resetGame(100);
        } else {
            alert("До скорого!");
        }
        data['WASTED'] = 'Вы проиграли!!!';
        }
    data[100 - monsterHealthBar.value] = 'Урон Монстру';
    data[100 - playerHealthBar.value] = 'Урон Игроку';
}
healBtn.onclick = function useHealth() {
    removeBonusLife();    
    increasePlayerHealth(playerHP);
    let newHP = playerHP - applyPlayerDamage(25); 
    data[playerHP - newHP] = 'Использование доп жизни';   
}

logBtn.onclick = function downLog() {
    console.log(data);
}

