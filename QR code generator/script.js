const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    // console.log(qrValue);
    if(!qrValue) return;//if the input is empty then return fronm here
    generateBtn.innerText = "Generating QR Code..."
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}';
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
    })
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code"

});