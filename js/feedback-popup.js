var feedbackPopup = document.querySelector(".feedback-pop-up");
var feedbackPopupButton = document.querySelector(".feedback-button");
var feedbackNameInput = document.querySelector(".input-name");

feedbackPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("pop-up-show");
  feedbackNameInput.focus()
});

var feedbackCloseButton = document.querySelector(".close-button");

feedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("pop-up-show")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("pop-up-show")) {
      feedbackPopup.classList.remove("pop-up-show")
    }

  }
});