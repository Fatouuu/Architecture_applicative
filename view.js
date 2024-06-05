function renderTasks() {
    const model = TaskModel.getInstance();
    const renderer = new SimpleTaskRenderer();
    renderer.render(model.tasks);
}

function getCategoryColor(categoryName) {
    const categoryManager = CategoryManager.getInstance();
    const category = categoryManager.categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'black'; // Utilisez noir par défaut si la catégorie n'a pas de couleur définie
}
