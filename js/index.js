const training = document.getElementById("training");
const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById("closeBtn");
const calcBtn = document.getElementById("calcBtn");
const shareBtn = document.getElementById("shareBtn");

training.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close("dialog close");
});

calcBtn.addEventListener("click", () => {
    const result = document.getElementById("result");
    const inputExpert = document.getElementById("expert");
    const inputHours = document.getElementById("hours");
    const resultExpert = document.getElementById("resultExpert");
    const resultDays = document.getElementById("resultDays");

    if (!inputHours.value || !inputExpert.value) {
        alert(
            "어떤 전문가가 될것인지, 하루에 훈련할 시간은 몇 시간인지 기입해 주세요."
        );
        return;
    }

    result.classList.remove("hidden");

    resultExpert.innerText = inputExpert.value;
    resultDays.innerText = Math.ceil(10000 / inputHours.value);
});

shareBtn.addEventListener("click", async () => {
    await copyCurrentUrl();
});

async function copyCurrentUrl() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert("URL이 클립보드에 복사되었습니다.");
    } catch (err) {
        console.error("URL 복사 실패:", err);
        alert("URL 복사에 실패했습니다.");
    }
}
