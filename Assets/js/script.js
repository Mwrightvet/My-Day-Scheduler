//  Setting the variables
const coffeeTask = document.getElementById("coffee");
const emailTask = document.getElementById("email");
const lunchTask = document.getElementById("lunch");
const meetingTask = document.getElementById("meeting");
const focusTask = document.getElementById("focus");
const breakTask = document.getElementById("break");
const deselectBtn = document.getElementById("deselect");
const taskContainer = document.querySelector(".task__container");
const scheduleContainer = document.querySelector(".schedule__container");

let selectedColor, active;

// Click event Listeners
taskContainer.addEventListener("click", selectTask);
scheduleContainer.addEventListener("click", setColors);
deselectBtn.addEventListener("click", resetTask);

// Task/Event click
function selectTask(e) {
  resetTasks();

  taskColor = e.target.style.backgroundColor;

  switch (e.target.id) {
    case "coffee":
      activeTask(coffeeTask, taskColor);
      icon = '<i class="fas fa-mug-hot"></i>';
      break;
    case "email":
      activeTask(emailTask, taskColor);
      icon = '<i class="fas fa-envelope"></i>';
      break;
    case "lunch":
      activeTask(lunchTask, taskColor);
      icon = '<i class="fas fa-cutlery"></i>';
      break;
    case "meeting":
      activeTask(meetingTask, taskColor);
      icon = '<i class="fas fa-users-rectangle"></i>';
      break;
    case "focus":
      activeTask(focusTask, taskColor);
      icon = '<i class="fas fa-laptop"></i>';
      break;
    case "break":
      activeTask(breakTask, taskColor);
      icon = '<i class="fas fa-spa"></i>';
      break;
  }
}

//select colors for the schedule
function setColors(e) {
  if (e.target.classList.contains("task") && active === true) {
    e.target.style.backgroundColor = selectedColor;
    e.target.innerHTML = icon;
  }
}

// Selecting a Task/Event and making it active
function activeTask(task, color) {
  task.classList.toggle("selected");

  if (task.classList.contains("selected")) {
    active = true;
    selectedColor = color;

    // //add the icon to the tasks inner html
    // task.iconHTML += `<i class="fas ${iconClass}"></i>`;
    return selectedColor;
  } else {
    active = false;
    // // remove the font awesome icon
    // const icon = task.querySelector("i");
    // if (icon) {
    //   icon.remove();
    // }
  }
}

// reset task/Event
function resetTasks() {
  const allTasks = document.querySelectorAll(".task__name");

  allTasks.forEach((item) => {
    item.className = "task__name";
  });
}
