var homework_done = true;
var time = 16;

function homeworkComplete() {
    if (homework_done === true && time < 10) {
        console.log("Excellent! You deserve a latte!");
    }
    else if (homework_done === true && time >= 10 && time < 15) {
        console.log("Good job! Time for some hot chocolate");
    }
    else if (homework_done === true && time >= 15 && time < 18) {
        if (time % 2 === 0) {
            console.log("Nice, time for ice cream!");
        }
        else {
            console.log("Sweet, time for some hot chocolate!");
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