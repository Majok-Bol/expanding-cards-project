const selectImages = document.querySelectorAll(".img-div");
selectImages.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveImage();
    image.classList.add("active");
  });
});
function removeActiveImage() {
  selectImages.forEach((image) => {
    image.classList.remove("active");
  });
}
