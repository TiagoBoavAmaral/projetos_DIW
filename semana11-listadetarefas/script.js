document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.name;
            if (task.completed) {
                li.classList.add('completed');
                li.classList.add('task-completed');
            }
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => removeTask(index));
            li.appendChild(removeButton);

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Concluída';
            completeButton.addEventListener('click', () => toggleTask(index));
            li.appendChild(completeButton);

            taskList.appendChild(li);
        });
        console.log('Tarefas carregadas:', tasks); 
    }

    function addTask() {
        const taskName = taskInput.value.trim();

        if (taskName !== '') {
            const task = { name: taskName, completed: false };
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            loadTasks();
            console.log('Tarefa adicionada:', task);
        }
    }


    function removeTask(taskIndex) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
        console.log('Tarefa removida:', tasks[taskIndex]);
    }

    function toggleTask(taskIndex) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
        console.log('Tarefa marcada como concluída:', tasks[taskIndex]); 
    }


    document.getElementById('addButton').addEventListener('click', addTask);

    loadTasks();
});
