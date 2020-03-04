function renderTaskManager(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [] ;

    if (taskList == undefined){
        taskList = [];
    }

    const listOfTask = document.getElementById("taskList");
    listOfTask.innerHTML = "";
    for (const task of taskList) {
        const taskDiv = document.createElement("div");
        const { teamMember, taskDescription } = task;
        taskDiv.innerHTML = `<h4>Team Member: ${ teamMember }</h4> 
                            <div>Task to do: ${ taskDescription }</div> `; 
        listOfTask.appendChild(taskDiv);
    }
}

function createNewProduct(event){
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
