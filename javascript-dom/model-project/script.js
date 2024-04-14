let openBtn = document.getElementById('open-btn');
let modelContainer = document.getElementById('model-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener("click", () => {
    modelContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modelContainer.style.display = "none";
});