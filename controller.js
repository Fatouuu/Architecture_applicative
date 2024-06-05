document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task-input').value.trim();
        const categoryInput = document.getElementById('category-select').value;
        if (taskInput !== '') {
            const model = TaskModel.getInstance();
            const newTask = new SimpleTask(taskInput, categoryInput);
            model.addTask(newTask);
            renderTasks(); // Appel de la fonction de rendu après l'ajout d'une tâche
            document.getElementById('task-input').value = ''; // Réinitialise le champ de saisie après l'ajout de la tâche
        }
    });
});
