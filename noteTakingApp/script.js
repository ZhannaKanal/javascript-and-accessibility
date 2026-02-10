const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = ""

window.addEventListener("DOMContentLoaded", ()=>{
  noteEl.textContent = currentContent;
})