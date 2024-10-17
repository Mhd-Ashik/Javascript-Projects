const wrapper = document.querySelector(".wrapper"),
    qrInput = document.getElementById("qrInput"),
    generateBtn = document.getElementById("generateBtn"),
    qrImg = document.getElementById("qrImg");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return; // Prevent generating the same QR code
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    
    // Use encodeURIComponent to safely encode the URL or text
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;
    
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
