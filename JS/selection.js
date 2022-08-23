
// Select Players Name and Listed into the Select list.


let players = document.getElementsByClassName('player-btn');

// Adding loop to the buttons

    for (i=0; i < players.length; i++){
        players[i].addEventListener('click', addPlayers);
        
    }
    // Declaring function for Click event and getting Inner Text from the Element 

    function addPlayers(event){
        const players = event.target;
        players.disabled = true;
        players.style.backgroundColor = 'gray';
        const addSelectList = players.parentElement;
        const playerName = addSelectList.children[0].innerText;
        addPlayersName(playerName);
    }
      
    const list = document.getElementById('player-list');
    
    function addPlayersName(playerName){
        
        const li = document.createElement('li');

        //  Condition for not select more than 5 Players

        if(list.childNodes.length >= 5){
            alert('Not more than 5 players');
           
            return;
        }

        

        li.innerText = playerName;
        
        

        list.appendChild(li);
    }
        



