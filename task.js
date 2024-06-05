class Task {
    constructor(name, category) {
        if (new.target === Task) {
            throw new TypeError("Cannot construct Task instances directly");
        }
        this.name = name;
        this.category = category;
    }

    display() {
        throw new Error("Method 'display()' must be implemented.");
    }
}

class SimpleTask extends Task {
    constructor(name, category) {
        super(name, category);
    }

    display() {
        return `${this.name} (${this.category})`;
    }
}

class TimedTask extends Task {
    constructor(name, category, duration) {
        super(name, category);
        this.duration = duration;
    }

    display() {
        return `Timed Task: ${this.name} (${this.category}) - ${this.duration} minutes`;
    }
}

class TaskRenderer {
    render(tasks) {
        throw new Error("Method 'render()' must be implemented.");
    }
}

class SimpleTaskRenderer extends TaskRenderer {
    render(tasks) {
        const taskList = document.createElement('ul');
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.display();
            taskItem.style.color = getCategoryColor(task.category);
            taskList.appendChild(taskItem);
        });

        const app = document.getElementById('task-list');
        app.innerHTML = '';
        app.appendChild(taskList);
    }
}
