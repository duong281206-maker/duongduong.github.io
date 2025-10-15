const colorPicker = document.getElementById("colorPicker");
const previewBox = document.getElementById("previewBox");
const applyBtn = document.getElementById("applyBtn");

colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  previewBox.style.background = color;
  previewBox.style.boxShadow = `0 0 25px ${color}`;
});

applyBtn.addEventListener("click", () => {
  const color = colorPicker.value;
  document.body.style.background = `linear-gradient(135deg, ${color}, #232345)`;
});
