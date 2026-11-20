const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Enter a valid number!`)
    } else if (guess < minNum || guess > maxNum){
        window.alert(`You have an invalid number!`)
    } else {
        attempts++;
        if(guess < answer){
            window.alert(`Too Low | Try Again`)
        } else if (guess > answer){
            window.alert(`Too High | Try Again`)
        } else {
            window.alert(`Your Answer Is Correct ${answer} | It Took You ${attempts} attempts`)
            running = false;
        }
    }

}