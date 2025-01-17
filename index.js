//My attempt at recreating fizzbuzz

userInput = prompt("Enter your number: ");

for (let i = 1; i <= userInput; i++) {

    if (userInput % 3 === 0 && userInput % 5 === 0) {
        console.log("FizzBuzz");
        } else if (userInput % 3 === 0) {
            console.log("Fizz");
        } else if (userInput % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(userInput);
        } 

}

/*Awesome I successfully solved fizzbuzz by myself and really understood it!! The only problem I ran into was checking if the user input
is equal to 0 for each multiple of 3, 5 or 3 and 5*/ 