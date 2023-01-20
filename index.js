// ACCESSING DATA
// --BUTTONS
const answerBtn1 = document.querySelector('[data-js="btn1"]');
const answerBtn2 = document.querySelector('[data-js="btn2"]');
const answerBtn3 = document.querySelector('[data-js="btn3"]');
const answerText = document.querySelector('[data-js="answer1"]');
const answerText2 = document.querySelector('[data-js="answer2"]');
const answerText3 = document.querySelector('[data-js="answer3"]');
// --CARDS
const questionCard = document.querySelector(".q-card");
const card = document.querySelector(".card");
// --TAGLIST
const tagList1 = document.querySelector('[data-js="tag_list1"]');
const tagList2 = document.querySelector('[data-js="tag_list2"]');
const tagList3 = document.querySelector('[data-js="tag_list3"]');
// --BOOKMARK
const bookmark1 = document.querySelector('[data-js="bookmark1"]');
const bookmark2 = document.querySelector('[data-js="bookmark2"]');
const bookmark3 = document.querySelector('[data-js="bookmark3"]');
const bookmarkUnfilled = document.querySelector('[data-js="book_unfilled]');
const bookmarkFilled = document.querySelector('[data-js="book_filled]');

// Functionality Bookmarks
// Bookmark1
bookmark1.addEventListener("click", () => {
  bookmarkUnfilled.classList.toggle("off");
  bookmarkFilled.classList.toggle("off");
});

bookmark2.addEventListener("click", () => {
  bookmarkUnfilled.classList.toggle("off");
  bookmarkFilled.classList.toggle("off");
});

bookmark3.addEventListener("click", () => {
  bookmarkUnfilled.classList.toggle("off");
  bookmarkFilled.classList.toggle("off");
});

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
  tagList1.classList.toggle("off");
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
  tagList2.classList.toggle("off");
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
  tagList3.classList.toggle("off");
});
