document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('newTask');
    const addTaskBtn = document.getElementById('addtaskbtn');
    const taskList = document.getElementById('taskList');

    function addTask(taskName) {
        if (taskName.trim() === '') return;

        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-name';
        span.textContent = taskName;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions'; 
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.className = 'btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        actionsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    addTaskBtn.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});
