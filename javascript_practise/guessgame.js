//Exercise 1: Guess the number
let number = Math.random()*(100-1)+1;
number = Number.parseInt(number);
let chances = 5;
console.log("you have 5 chances")
let input = prompt("Guess the number from 1-100 ---> ");
while (chances != 1) {
    chances--;
    console.log(`${chances} chances left!!!`)
    input = prompt("Try Again!!!!! ---> ");
    if(input==number)
    {
        console.log(`congratulations you won at ${chances} chances`);
        break;
    }
}
console.log(`you lost!!! the number was ${number}`);
