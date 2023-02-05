const container = jQuery("#container-ball");
const easyButton = jQuery("#easy");
const mediumButton = jQuery("#medium");
const hardButton = jQuery("#hard");
const startGame = jQuery("#start-button");
const reset = jQuery("#reset");
const box_point = jQuery("#box_points");

let Point = 0;
Point = parseInt(Point);

let intervalId;

function createBall() {
    let x = Math.floor(Math.random() * (container.width() - 65));
    let y = Math.floor(Math.random() * (container.height() - 65));

    let ball = jQuery("<div></div>");
    ball.addClass("target");
    ball.html('<i class="fa-solid fa-bullseye"></i>');
    ball.css("left", x + "px");
    ball.css("top", y + "px");
    ball.click(function () {
        ball.remove();
        Point++;
        box_point.text(Point);
    });

    container.append(ball);
}

function startInterval(time) {
    clearInterval(intervalId);
    intervalId = setInterval(createBall, time * 1000);
}

function setDifficultyLevel(time) {
    Point = 0;
    txtTimer.text("00:00");
    box_point.text("0");
    startTimer();
    startInterval(time);
    jQuery(".target").remove();
}

easyButton.click(function () {
    setDifficultyLevel(1.3);
});

mediumButton.click(function () {
    setDifficultyLevel(1);
});

hardButton.click(function () {
    setDifficultyLevel(0.3);
});

startGame.click(function () {
    startInterval(0.7);
    jQuery(".target").remove();
    txtTimer.text("00:00");
    startTimer();
});

reset.click(function () {
    clearInterval(intervalTimer);
    clearInterval(intervalId);
    jQuery(".target").remove();
    txtTimer.text("00:00");
    Point = 0;
    box_point.text("0");
});
