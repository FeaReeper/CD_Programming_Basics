var homework_done = true;
var time = 17;
var choice1 = ["ice cream", "cookies", "candy"];
var choice2 = ["hot chocolate", "tea", "cake"];
var random1 = choice1[Math.floor(Math.random() * choice1.length)];
var random2 = choice2[Math.floor(Math.random() * choice2.length)];

function homeworkComplete() {
    if (homework_done === true && time < 10) {
        console.log("Excellent! You deserve a latte!");
    }
    else if (homework_done === true && time >= 10 && time < 15) {
        console.log("Good job! Time for some hot chocolate");
    }
    else if (homework_done === true && time >= 15 && time < 18) {
        if (time % 2 === 0) {
            console.log("Nice, time for " + random1 + "!");
        }
        else {
            console.log("Sweet, time for some " + random2 + "!");
        }
    }
    else if (homework_done === true && time >= 18 && time < 22) {
        console.log("Not bad! You deserve an ice cream!");
    }
    else if (homework_done === true && time > 22) {
        console.log("Way to procrastinate, time for sleep!");
    }
    else {
        console.log("You lazy bum!");
    }
}

homeworkComplete();