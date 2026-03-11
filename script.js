// Smooth scroll for banner button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});

function goToPage(page){
  window.location.href = page;
}

const container = document.getElementById("scrollContainer");
let speed = 1; // adjust speed
let isDragging = false;
let lastX;

function autoScroll() {
  if (!isDragging) {
    container.scrollLeft += speed; // auto right → left
    // loop back for infinite effect
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    }
  }
  requestAnimationFrame(autoScroll);
}

// drag to scroll (your existing code)
container.addEventListener("mousedown", e => {
  isDragging = true;
  lastX = e.pageX;
});
container.addEventListener("mousemove", e => {
  if (!isDragging) return;
  const dx = e.pageX - lastX;
  container.scrollLeft -= dx;
  lastX = e.pageX;
});
container.addEventListener("mouseup", () => isDragging = false);
container.addEventListener("mouseleave", () => isDragging = false);
container.addEventListener("touchstart", e => {
  isDragging = true;
  lastX = e.touches[0].pageX;
});
container.addEventListener("touchmove", e => {
  if (!isDragging) return;
  const dx = e.touches[0].pageX - lastX;
  container.scrollLeft -= dx;
  lastX = e.touches[0].pageX;
});
container.addEventListener("touchend", () => isDragging = false);

// start auto scroll
requestAnimationFrame(autoScroll);