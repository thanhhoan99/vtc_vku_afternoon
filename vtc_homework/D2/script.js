// Clock & Greeting
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const greeting = document.getElementById("greeting");

  clock.textContent = now.toLocaleTimeString();

  const hour = now.getHours();
  greeting.textContent =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";
}
setInterval(updateClock, 1000);
updateClock();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent =
    document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// To-Do List
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(filter = "all") {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, i) => {
    if (
      filter === "completed" && !task.done ||
      filter === "incomplete" && task.done
    ) return;

    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";
    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} data-id="${i}">
      <span>${task.text}</span>
      <button class="delete-btn" data-id="${i}">Delete</button>
    `;
    list.appendChild(li);
  });
}

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (!value) return alert("Task cannot be empty.");
  tasks.push({ text: value, done: false });
  input.value = "";
  saveTasks();
});

document.getElementById("taskList").addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (e.target.tagName === "INPUT") {
    tasks[id].done = e.target.checked;
  }
  if (e.target.classList.contains("delete-btn")) {
    tasks.splice(id, 1);
  }
  saveTasks();
});

document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    renderTasks(btn.dataset.filter);
  })
);

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
renderTasks();

// Sticky Notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";
  notes.forEach((note, i) => {
    const div = document.createElement("div");
    div.className = "note";
    div.style.backgroundColor = note.color;
    div.innerHTML = `
      ${note.text}
      <button class="delete-note" data-id="${i}">×</button>
    `;
    container.appendChild(div);
  });
}

document.getElementById("addNoteBtn").addEventListener("click", () => {
  const input = document.getElementById("noteInput");
  const value = input.value.trim();
  if (!value) return alert("Note cannot be empty.");
  const colors = ["#aed581", "#ffecb3", "#80deea", "#ffccbc"];
  notes.push({ text: value, color: colors[Math.floor(Math.random() * colors.length)] });
  input.value = "";
  saveNotes();
});

document.getElementById("notesContainer").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-note")) {
    notes.splice(e.target.dataset.id, 1);
    saveNotes();
  }
});

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
renderNotes();
