const inputColor = document.getElementById("input-color");
const btnVisualize = document.getElementById("btn-visualize");
const displayValue = document.getElementById("display-value-color");
const bgColor = document.getElementById("content-value-color");
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");
const inputColor2 = document.getElementById("input-color2");
const linearRadio = document.getElementById("linear-radio");
const radialRadio = document.getElementById("radial-radio");

btnVisualize.addEventListener("click", () => {
    colorOne.textContent = (inputColor.value);
    colorTwo.textContent = (inputColor2.value);
    bgColor.style.backgroundColor = inputColor.value;
});
function setLinearGradient() {
    bgColor.style.background = ` linear-gradient(to right, ${inputColor.value} , ${inputColor2.value} )`;
}

function setRadialGradient() {
    bgColor.style.background = ` radial-gradient(${inputColor.value} , ${inputColor2.value} )`;
}
linearRadio.addEventListener('change', () => {
    inputColor.addEventListener("input", setLinearGradient())
    inputColor2.addEventListener("input", setLinearGradient())
    // console.log(linearRadio.checked)
    // console.log('radial',radialRadio.checked)

})
radialRadio.addEventListener('change', () => {
    inputColor.addEventListener("input", setRadialGradient())
    inputColor2.addEventListener("input", setRadialGradient())
    // console.log(radialRadio.checked)
    // console.log('lineal', linearRadio.checked)

})


