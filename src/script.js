const listNotes = document.getElementsByClassName("listNotes");
const inputBox = document.getElementById("inputBox");
const createBtn = document.getElementById("createBtn");
const addNotes = document.getElementById("addNotes");

addNotes.addEventListener("click", (event) => {
      if (event.target.classList.contains("removeNote")) {
            event.target.parentNode.remove();
            console.log("Note Deleted")
      }
});
addNoteFunction = () => {
      const text = inputBox.value;

      let note = document.createElement("div");
      note.classList.add("flex", "justify-center", "items-center", "w-screen");
      note.innerHTML = `<div
                                                  class=" flex justify-between items-center inp mt-10 pl-6 h-12 w-2/3 bg-gray-300 pr-5 p-2">
                                                  <p class="listNotes" class=""> ${text} </p>
                                                  <img  class="w-5 h-5 removeNote" src="../cross.png" alt="">
                                          </div>`;
      addNotes.appendChild(note);
      inputBox.value = "";
};

createBtn.addEventListener("click", addNoteFunction);
inputBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
            addNoteFunction();
      }
});
