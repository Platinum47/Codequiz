var startButton = document.querySelector("#start");
var checkButton = document.querySelector("#check");
var time = 1200;
var flag = true;

var questions = [
  ["What is 1 plus 1?", "2"],
  ["how far is the earth from the sun?", "238900"],
  ["How far is the earth from the moon", "15000"],
];

document.querySelector("#Time").textContent = time;
startButton.addEventListener("click", startQuiz);
checkButton.addEventListener("click", stopPause);

function startQuiz() {
  setInterval(function () {
    document.querySelector("#Time").textContent = time;
    time--;
  }, 1000);

  setTimeout(pause, 500);

  for (question of questions) {
    document.getElementById("question").value = question[0];
    continuePause();
    var answer = document.getElementById("answer").value;
    if (answer != question[1]) {
      time = time - 30;
    }
  }
}

function pause() {
  if (flag) {
    setTimeout(pause, 500);
  }
}

function stopPause() {
  flag = false;
}

function continuePause() {
  flag = true;
  pause();
}