# Math Bunnies

//Rules
//User calculate the solutions to the math problems on the bunny
//user input solution into box
//user beat 1st level at 10 pts


## Wireframe
![wireframe](https://github.com/devMorgan799/MathBunniesGame/blob/master/images/bunny%20game.jpg)

// TIMELINE
//  Thursday game functionality
//  Friday game animation
//  Saturday game animation
//  Sunday put it together
//  Monday get feedback
//  Tuesday present


//Shoutout
//Aleh with parallax
//angel with fxns
//olga with images

//code
//html code
 <input id = "answerBox" placeholder="Answer Here"></input>
        <button value = 'send' id = "submit" onclick="checkAnswer()">Submit</button>

// JS

answer = document.getElementById("answerBox").value;
console.log(answer)
answer.onclick= checkAnswer;

function checkAnswer() {

    if (answer == sln) {
        // answer.textContent= "NICE JOB!", <break>, "total points="
        // // points += 1
        console.log("NICE JOB!");
    } else {
        // answer.textContent= "Try again."
        console.log("try again");
    }
}


