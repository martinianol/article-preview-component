const shareBtns = document.querySelectorAll("button");
const shareBtn = document.getElementById("share-btn");
const shareBtn2 = document.getElementById("share-btn-2");
const shareDetails = document.getElementById("share-details");
const userInfo = document.getElementById("user-info");
const arrowTooltip = document.getElementsByClassName("arrow")[0];

function positionTooltip() {
  if (!shareDetails.classList.contains("hidden") && window.innerWidth >= 500) {
    requestAnimationFrame(() => {
      shareDetails.style.position = "absolute";
      const btnRect = shareBtn.getBoundingClientRect();
      const tooltipHeight = shareDetails.offsetHeight;
      shareDetails.style.left = `${btnRect.left + btnRect.width / 2}px`;
      shareDetails.style.transform = "translateX(-50%)";
      shareDetails.style.top = `${btnRect.top - tooltipHeight - 30}px`;
    });
  } else {
    // Reset inline styles when hiding the tooltip
    shareDetails.style.position = "";
    shareDetails.style.left = "";
    shareDetails.style.top = "";
    shareDetails.style.transform = "";
  }
}

shareBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    shareDetails.classList.toggle("hidden");
    userInfo.classList.toggle("hidden", window.innerWidth < 500);

    button.classList.toggle(
      "active",
      !shareDetails.classList.contains("hidden")
    );
    positionTooltip();
  });
});

window.addEventListener("resize", () => {
  if (shareBtn.classList.contains("active")) {
    userInfo.classList.toggle("hidden", window.innerWidth < 500);
  }
  positionTooltip();
});
