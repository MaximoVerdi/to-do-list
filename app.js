const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () => {
  const task = inputBox.value;
  if (inputBox.value.length === 0 || task.length === 0) {
    alert("You must write a task");
    return;
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);

    let i = document.createElement("i");
    i.className = "bx bx-x";
    li.appendChild(i);
  }
  inputBox.value = "";
  saveData();
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.classList.remove("checked");
  } else {
    e.target.classList.add("checked");
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "li") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function loadData() {
  taskList.innerHTML = localStorage.getItem("data");
}
loadData();
