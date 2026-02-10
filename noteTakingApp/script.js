const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = ""

noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

});

window.addEventListener("DOMContentLoaded", ()=>{
  noteEl.textContent = currentContent;
})