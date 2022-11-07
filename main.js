const menuBtnEl = document.querySelector(".menuBtn");
const navEl = document.querySelector(".nav");
const closeBtnEl = document.querySelector(".closeBtn");

console.log(closeBtnEl,menuBtnEl,navEl)
menuBtnEl.addEventListener("click",()=>{
    navEl.classList.add("open");
    // menuBtnEl.style.display = "none";
   
})

closeBtnEl.addEventListener("click",()=>{
    navEl.classList.remove("open");
    //  menuBtnEl.style.display = "block";
})

const numbers = [12,33,44,55,6,90];

// iterate 
let result = 0;
for(let i = 0; i < 6 ; i++){
   result += numbers[i]
}
console.log(result)