function renderTaskManager(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [] ;

    if (taskList == undefined){
        taskList = [];
    }

    const listOfTask = document.getElementById("taskList");
    listOfTask.innerHTML = "";
    for (const task of taskList) {
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute('class', 'task-divs');
        const { teamMember, taskDescription } = task;
        taskDiv.innerHTML = `<h4>${ teamMember }</h4> 
                            <div>${ taskDescription }</div> `; 
        listOfTask.appendChild(taskDiv);
    }
}

function createNewTask(event){
    event.preventDefault();

    const teamMember = document.querySelector("[name='name']").value;
    const taskDescription = document.querySelector("[name='description']").value;

    const task = {teamMember,taskDescription};


    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTaskManager();

    event.target.reset();
}
renderTaskManager();

window.addEventListener("storage", function(event) {
    if (event.key === "taskList") {
        renderTaskManager();
    }
});
function clearlist(){
localStorage.clear();
}