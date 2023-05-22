var homework_done = true;
var time = 10;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = "Wednesday";

function homeworkComplete() {
    if (homework_done === true && time < 10) {
        console.log("Excellent! You deserve a latte!");
    }
    else if (homework_done === true && time >= 10 && time < 16) {
        console.log("Good job! Time for some hot chocolate");
    }
    else if (homework_done === true && time >= 16 && time < 22) {
        console.log("Not bad! You deserve an ice cream!");

        if (day === days[3]) {
            console.log("Because its Wednesday, I will have strawberry ice cream!");
        }
        else {
            console.log("I will have vanilla ice cream today!");
        }
    }
    else if (homework_done === true && time > 22) {
        console.log("Way to procrastinate, time for sleep!");
    }
    else {
        console.log("You lazy bum!");
    }
}

homeworkComplete();