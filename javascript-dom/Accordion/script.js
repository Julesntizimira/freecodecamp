const accordion = document.getElementsByClassName('content-container');

for (let acc of accordion) {
    acc.addEventListener("click", function () {
        // console.log(acc.innerText);
        // console.log(acc.classList);
        this.classList.toggle('active');
    });
}