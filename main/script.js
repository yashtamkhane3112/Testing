// simple click test
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("click",()=>{
console.log(btn.innerText + " clicked");
});
});