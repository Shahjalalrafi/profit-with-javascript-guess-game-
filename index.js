window.onload = function() {
    document.getElementById('submit').addEventListener('click', playGame)
    document.getElementById('restart').addEventListener('click', initGame)
}

const correctNumber = getRandomNumber()
console.log(correctNumber)


function playGame() {
    const numberGuess = document.getElementById('number-guess').value
    displayResult(numberGuess)
}


// Display result 

function displayResult(numberGuess) {
    if(correctNumber > numberGuess) {
        console.log('number is to low')
    }else if(correctNumber < numberGuess) {
        console.log('number is to high')
    }else {
        console.log('correct number')
    }
}

// return random number

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    return randomNumber
}



function getDialog(dialogType, text) {
    let dialog
    switch (dialogType) {
        case "warning":
            dialog = <div></div>
            break;
    
        default:
            break;
    }
}