window.addEventListener("load", () => {
  //Selecting sounds
  let intro = new Audio("sounds/intro-music.mp3");
  let shot = new Audio("sounds/shot2.mp3");
  //Selecting elements
  let modal = document.querySelector(".modal");
  let startButton = document.querySelector(".modal-content").lastElementChild;
  let playerScore = document.querySelector(".row.bottom").firstElementChild;
  // let cpuScore = document.querySelector("row.bottom").lastElementChild;
  let roundNumber = document.querySelector(".round");
  let display = document.querySelector(".display");
  let userMove =
    document.querySelector(".results").firstElementChild.firstElementChild;
  let cpuMove = document.querySelector(".results").lastElementChild;
  let option1 =
    document.querySelector(".play").firstElementChild.nextElementSibling;
  let option2 = option1.nextElementSibling;
  let option3 = option2.nextElementSibling;
  let userChoices = [option1, option2, option2];

  startButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    intro.play();
  });
  userChoices.forEach(() => {
    choice.addEventListener("click", () => {
      shot.play();
    });
  });
});
