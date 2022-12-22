const playerArray = [];
function display() {
    const cardBody = document.getElementById('player-added');
    cardBody.innerHTML = '';
    for (let i = 0; i < playerArray.length; i++) {
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
       <th>${i + 1}.</th>
       <td>${name}</td>
       `
        cardBody.appendChild(tr);
    }
}

function addPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    // Bonus
    if (playerArray.length < 5 ) {
        playerArray.push(playerObj)
        display();
        disable(element);
    } else {
        return alert ("you cant't add more then 5 players");
    }

}
// Bonus
function disable(x){
    x.disabled = true;
    x.style.backgroundColor = '#A2A9AF';
}