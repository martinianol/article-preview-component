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
    if (window.innerWidth < 500) {
      // Mobile behavior: Toggle both user-info and share-details
      shareDetails.classList.toggle("hidden");
      userInfo.classList.toggle("hidden");
      arrowTooltip.classList.toggle("hidden");
    } else {
      // Tablet/Desktop behavior: Only toggle share-details as a tooltip
      shareDetails.classList.toggle("hidden");
      // Toggle the 'active' class on the button
      shareBtn.classList.toggle(
        "active",
        !shareDetails.classList.contains("hidden")
      );
      positionTooltip();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 500) {
    // Switch to mobile layout
    shareDetails.classList.add("hidden");
    userInfo.classList.remove("hidden");
    shareBtn.classList.remove("active");
  }
  // Reposition the tooltip in desktop layout
  positionTooltip();
});
