const shareBtns = document.querySelectorAll("button");
const shareBtn = document.getElementById("share-btn");
const shareBtn2 = document.getElementById("share-btn-2");
const shareDetails = document.getElementById("share-details");
const userInfo = document.getElementById("user-info");

shareBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (window.innerWidth < 500) {
      // Mobile behavior: Toggle both user-info and share-details
      shareDetails.classList.toggle("hidden");
      userInfo.classList.toggle("hidden");
    } else {
      // Tablet/Desktop behavior: Only toggle share-details as a tooltip
      shareDetails.classList.toggle("hidden");
      if (!shareDetails.classList.contains("hidden")) {
        // Wait until after rendering to get dimensions
        requestAnimationFrame(() => {
          shareDetails.style.position = "absolute";
          const btnRect = shareBtn.getBoundingClientRect();
          const shareDetailsRect = shareDetails.getBoundingClientRect();
          // Align the left edge of share-details with the share button
          shareDetails.style.left = `${btnRect.left + btnRect.width / 2}px`;
          shareDetails.style.transform = "translateX(-50%)";
          const tooltipHeight = shareDetails.offsetHeight;
          // Position share-details above share-btn by 18px
          shareDetails.style.top = `${btnRect.top - tooltipHeight - 30}px`;
        });
      } else {
        // Reset inline styles when hiding the tooltip
        shareDetails.style.position = "";
        shareDetails.style.left = "";
        shareDetails.style.top = "";
      }
    }
  });
});
