function computerplay() {    
    return Math.floor((Math.random() * 3) )
}

// rock= 0, paper = 1, scissors = 2

// 0 > 2, 0 < 1, 1 < 2

// result function: 0 if player looses, 1, if player wins, 2 if draw
function rpsround(playersel, compsel) {
    if ( playersel === compsel) {
        return 2;
    }
    if ((playersel === 0 && compsel === 1) || (playersel == 1 && compsel === 2) 
    || (playersel === 2 && compsel === 0)) {
        return 0;
    } 
    else {
        return 1; 
    }
}

function play() {
    let x = prompt("Enter the rounds you want to play: ");
    let score_user = 0;
    let score_comp = 0;

     for (let i = 0; i < x; i ++) {
        let playersel;
        
        let choice = prompt(" Enter your choice: ", "Rock, paper , scissors");
        
        choice = choice.toLowerCase();
        console.log(choice);
        
        switch(choice) {
            case 'rock':
                playersel = 0;
                break;
            case 'paper':
                playersel = 1;
                break;
            case 'scissors':
                playersel = 2;
                break;
            default: 
            console.log("invalid input")
        }
        let result = rpsround(playersel, computerplay());

        console.log("result: " + result);

        switch (result) {
            case 0:
                score_comp++;
                console.log("you lost. score: YOU " + score_user + ":" + score_comp + "  COMP")
                break;
            case 1: 
                score_user++;
                console.log("you won. score: YOU " + score_user + ":" + score_comp + " COMP")
                break;
            default:
                console.log("draw!")

        }

     }
    console.log("Final score: YOU " + score_user + " : " + score_comp + " COMP");
}

play();
