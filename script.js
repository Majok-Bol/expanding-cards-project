const selectImages = document.querySelectorAll(".img-div");
selectImages.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveClass();
    image.classList.add("active");
  });
});
function removeActiveClass() {
  selectImages.forEach((image) => {
    image.classList.remove("active");
  });
}
