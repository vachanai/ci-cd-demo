const changeTextBtn = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

changeTextBtn.addEventListener("click", () => {
    message.textContent = "JavaScript ทำงานแล้ว และไฟล์นี้มาจากโฟลเดอร์ local";
});
