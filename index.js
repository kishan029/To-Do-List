console.log("Welcome to Notes");
//User add a note
let title = document.getElementById("addTitle");
let txt = document.getElementById("addTxt");
let notes = [];
display();
document.getElementById("addBtn").addEventListener("click", () => {
  let notesObj = localStorage.getItem("notes");
  if (notesObj == null) notes = [];
  else notes = JSON.parse(notesObj);

  let obj = {
    title: title.value,
    text: txt.value,
  };

  if (obj.title !== "" && obj.text !== "") {
    notes.push(obj);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  title.value = "";
  txt.value = "";
  display();
});
//Display

function display() {
  let html = ``;
  let notesObj = localStorage.getItem("notes");

  if (notesObj == null) notes = [];
  else notes = JSON.parse(notesObj);

  if (notes.length != 0) {
    notes.forEach(function (Element, index) {
      html += `<div class="mx-2 card" style="width: 15rem;">
    <div class="card-body">
      <h5 class="card-title">${Element.title}
      <span class="badge badge-dark">${index + 1}</span>
      </h5>
      <p class="card-text">${Element.text}</p>
      <a href="#" id=${index} class="btn btn-primary" 
      onClick="del(this.id)">Delete</a>
    </div>
    </div>`;
    });
    document.getElementById("notes").innerHTML = html;
  } else {
    document.getElementById("notes").innerHTML
     = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
function del(index) {
  let notesObj = localStorage.getItem("notes");
  if (notesObj == null) {
    notes = [];
  } else {
    notes = JSON.parse(notesObj);
  }
  notes.splice(index, 1);
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
  display();
}
