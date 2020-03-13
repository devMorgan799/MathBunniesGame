console.log( "mathBunnies js is here");


//part 1 initiate variable to be used in the game and math
let sln;
console.log(sln)
let answer=0; 
// answer.addeventlistener(checkAnswer());
let points=0;

function playGame () {
        //Part a get the number
    let firstNum= random(0,10);
    let secondNum= random(1,10);

    function random(min, max) {
        return Math.floor(Math.random()* (max - min)+ min);
    }
    console.log(firstNum, secondNum);
    // document.getElementById("alert").innerHTML= "your firstnum= "+firstNum+"your secondnumb"+secondNum;

    // part b get the operator
    let opArray = ["+","-", "*", "/"];
    let opIndex = random(0,3);

    let operation = opArray[opIndex];
    console.log(operation);

    //part C get the math problem
    switch (opIndex){
        case 0: 
            sln= firstNum+secondNum; //solution used to check final answer
            bunnyfxn= (firstNum,operation,secondNum,"="); //fxn on bunnys back
            console.log(firstNum,operation,secondNum,"=",sln); //just to check data
            break;
        case 1: 
            sln= firstNum-secondNum; //solution used to check final answer
            bunnyfxn= (firstNum,operation,secondNum,"="); //fxn on bunnys back    
            console.log(firstNum,operation,secondNum,"=",sln); //just to check data
            break;
        case 2: 
            sln= firstNum*secondNum ; //solution used to check final answer
            bunnyfxn= (firstNum,operation,secondNum,"="); //fxn on bunnys back
            console.log(firstNum,operation,secondNum,"=",sln); //just to check data
            break;
        case 3: 
            sln= firstNum/secondNum;  //solution used to check final answer
            bunnyfxn= (firstNum,operation,secondNum,"="); //fxn on bunnys back 
            console.log(firstNum,operation,secondNum,"=",sln); //just to check data
            break;
    }
}

playGame();

//part 2 check answer with solution. use this 
//function to check the input answer to the solution

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

//Start game connected to function
let start = document.getElementById("startButton"); 
start.onclick= playGame;