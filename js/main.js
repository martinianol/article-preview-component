const shareBtns = document.querySelectorAll(".button");
const shareBtn = shareBtns[0];
const shareBtn2 =shareBtns[1]
const shareDetails = document.querySelector(".share-details--hidden");
const userInfo = document.querySelector(".user-info");
const arrowTooltip = document.getElementsByClassName("arrow")[0];

const positionTooltip = () => {
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
};

shareBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const isHidden = shareDetails.classList.toggle("hidden");

    // Toggle user-info visibility only in mobile view
    if (window.innerWidth < 500) {
      userInfo.classList.toggle("user-info--hidden", !isHidden);
    }

    button.classList.toggle("active", !isHidden);
    positionTooltip();
  });
});

window.addEventListener("resize", () => {
  const isMobileView = window.innerWidth < 500;
  const isTooltipVisible = !shareDetails.classList.contains("hidden");

  if (isTooltipVisible) {
    userInfo.classList.toggle("hidden", isMobileView); // Ensure user-info is visible
  }

  positionTooltip();
});

window.addEventListener("click", (e) => {
  // Check if the clicked element is NOT inside shareDetails or the buttons
  if (
    !shareDetails.contains(e.target) &&
    !shareBtn.contains(e.target) &&
    !shareBtn2.contains(e.target)
  ) {
    shareDetails.classList.add("hidden");
    userInfo.classList.remove("hidden");
    shareBtn.classList.remove("active");
    shareBtn2.classList.remove("active");
  }
});
