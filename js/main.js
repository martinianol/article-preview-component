const shareBtns = document.querySelectorAll("button");
const shareBtn = document.getElementById("share-btn");
const shareBtn2 = document.getElementById("share-btn-2");
const shareDetails = document.getElementById("share-details");
const userInfo = document.getElementById("user-info");

shareBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    shareDetails.classList.toggle("hidden");
    userInfo.classList.toggle("hidden");
  });
});
