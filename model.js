const TaskModel = (function() {
    let instance;

    function createInstance() {
        return {
            tasks: [],
            addTask: function(task) {
                this.tasks.push(task);
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const CategoryManager = (function() {
    let instance;

    function createInstance() {
        return {
            categories: [],
            addCategory: function(category) {
                this.categories.push(category);
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
