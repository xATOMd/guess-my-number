'use strict'

let score = 20
let highscore = 0
let secretNumber
let scoreDisplay = document.querySelector('.score')

const randomSecretNumber = maxNumber => {
	secretNumber = Math.trunc(Math.random() * maxNumber) + 1
	return secretNumber
}
randomSecretNumber(score)

const displayMessage = message => {
	document.querySelector('.message').textContent = message
}

const guessNumber = () => {
	const guess = Number(document.querySelector('.guess').value)
	console.log(guess, typeof guess)

	// Where there is no inputt
	if (!guess) {
		displayMessage('🚫 No number')

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage('🍾 Correct Number')
		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.number').textContent = secretNumber
		document.querySelector('.number').style.width = '30rem'

		if (score > highscore) {
			highscore = score
			document.querySelector('.highscore').textContent = highscore
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low')
			score--
			scoreDisplay.textContent = score
		} else {
			displayMessage('💥 You lost the game')
			scoreDisplay.textContent = 0
		}
	}
}

document.querySelector('.check').addEventListener('click', guessNumber)

const resetGame = () => {
	score = 20
	randomSecretNumber(score)
	scoreDisplay.textContent = score
	document.querySelector('body').style.backgroundColor = '#222'
	displayMessage('Start guessing...')
	document.querySelector('.number').textContent = '?'
	document.querySelector('.guess').value = ''
	document.querySelector('.number').style.width = '15rem'
}

document.querySelector('.again').addEventListener('click', resetGame)
