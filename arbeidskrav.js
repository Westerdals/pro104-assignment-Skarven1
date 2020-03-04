function renderTaskManager(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [] ;

    if (taskList == undefined){
        taskList = [];
    }

    const listOfTask = document.getElementById("taskList");
    listOfTask.innerHTML = "";
    for (const task of taskList) {
        const taskDiv = document.createElement("div");
        const { name, description } = task;
        taskDiv.innerHTML = `<h4>${name}</h4> 
            <div>${ description }</div> `; 
        listOfTask.appendChild(taskDiv);
    }
}

function createNewProduct(event){
    event.preventDefault();

    const name = document.querySelector("[name='name']").value;
    const price = document.querySelector("[name='price']").value;
    const description = document.querySelector("[name='description']").value;

    const task = {name,price,description};


    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(task);
    window.localStorage.setItem("taskList", JSON.stringify(productList));
    renderProductList();

    event.target.reset();
}
renderTaskManager();

window.addEventListener("storage", function(event) {
    if (event.key === "taskListList") {
        renderProductList();
    }
});
