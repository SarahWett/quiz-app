// accessing the data in html
const answerBtn1 = document.querySelector('[data-js="btn1"]');
const answerBtn2 = document.querySelector('[data-js="btn2"]');
const answerBtn3 = document.querySelector('[data-js="btn3"]');
const answerText = document.querySelector('[data-js="answer1"]');
const answerText2 = document.querySelector('[data-js="answer2"]');
const answerText3 = document.querySelector('[data-js="answer3"]');
const questionCard = document.querySelector(".q-card");
const card = document.querySelector(".card");

// adding button actions
//Button 1
answerBtn1.addEventListener("click", () => {
  answerText.classList.toggle("off");
  let text = "";
  if (answerBtn1.textContent === "HIDE") {
    text = "SHOW ANSWER";
  } else {
    text = "HIDE";
  }
  answerBtn1.textContent = text;
});

//Button 2
answerBtn2.addEventListener("click", () => {
  answerText2.classList.toggle("off");
  let text = "";
  if (answerBtn2.textContent === "HIDE") {
    text = "SHOW ANSWER";
  } else {
    text = "HIDE";
  }
  answerBtn2.textContent = text;
});

//Button 3
answerBtn3.addEventListener("click", () => {
  answerText3.classList.toggle("off");
  let text = "";
  if (answerBtn3.textContent === "HIDE") {
    text = "SHOW ANSWER";
  } else {
    text = "HIDE";
  }
  answerBtn3.textContent = text;
});
