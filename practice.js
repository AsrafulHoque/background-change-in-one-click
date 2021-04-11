const change_btn = document.getElementById("click_me");
const input_color = document.getElementById("colors");

const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

change_btn.addEventListener("click", function () {
    
    let hastag = "#";
  
    for (let i = 0; i < 6; i++) {
        console.log(hexColor[Math.floor(Math.random() * hexColor.length)]);
        hastag = hastag + hexColor[Math.floor(Math.random() * hexColor.length)];
    }
    document.body.style.backgroundColor = hastag;
    input_color.textContent = hastag;
    input_color.style.color = hastag;

});


// function getvalue(){
//     return Math.floor(Math.random() * hexColor.length)
// }