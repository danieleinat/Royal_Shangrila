// תצוגת תמונה מוגדלת (Lightbox)
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const img = document.createElement("img");
lightbox.appendChild(img);

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    img.src = image.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
