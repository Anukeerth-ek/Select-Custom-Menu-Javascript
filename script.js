const selectFieldEl = document.getElementById("select-fields");
const showList = document.getElementById("show-list ");
const selectTextEl = document.getElementById("select-text");
const listEl = document.getElementById("list");
const optionsEl = document.getElementsByClassName("options");

selectFieldEl.onClick = () => {
     for (let option of optionsEl) {
          option.onClick = () => {
               selectTextEl.innerHTML = this.textContent;
          };
     }
};

selectFieldEl.addEventListener("click", () => {
     listEl.classList.toggle("hide-list");
});
