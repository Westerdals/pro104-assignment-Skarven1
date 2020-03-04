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

function renderMemberList(){
    const memberListLocal = JSON.parse(window.localStorage.getItem("memberlist")) || [] ;

    if (memberListLocal == undefined){
        memberListLocal = [];
    }

    const listOfMembers = document.getElementById("team-member-list");
    listOfMembers.innerHTML = "";
    for (const members of memberListLocal) {
        const memberDiv = document.createElement("div");
        memberDiv.setAttribute('class', 'member-divs');
        const {teamMemberName, jobTitle} = members;
        memberDiv.innerHTML = `<h4>${ teamMemberName }</h4> 
                            <div>${ jobTitle }</div> `;
        listOfMembers.appendChild(memberDiv);
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

function createNewTeamMember(memberInfo){
    memberInfo.preventDefault();

    const teamMemberName = document.querySelector("[name='teammember-name']").value;
    const jobTitle = document.querySelector("[name='job-title']").value;

    const memberData = {teamMemberName, jobTitle};

    const memberList = JSON.parse(window.localStorage.getItem("memberlist")) || [];
    memberList.push(memberData);
    window.localStorage.setItem("memberlist", JSON.stringify(memberList));

    renderMemberList();

    memberInfo.target.reset();
}

renderTaskManager();
renderMemberList();

window.addEventListener("storage", function(event) {
    if (event.key === "taskList") {
        renderTaskManager();
    }
});
