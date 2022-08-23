let players = document.getElementsByClassName('player-btn');



    for (i=0; i < players.length; i++){
        players[i].addEventListener('click', addPlayers);
        
    }
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
            
        // console.log(addSelectList);
        
        
    
        const li = document.createElement('li');

        
        
        if(list.childNodes.length === 5){
            alert('Not more than 5 players');
            return;
        }
        

        li.innerText = playerName;
        
        

        list.appendChild(li);
    }
        



