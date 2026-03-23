const changeTextBtn = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

changeTextBtn.addEventListener("click", () => {
    message.textContent = "ข้อความนี้มาจาก JavaScript";
});
