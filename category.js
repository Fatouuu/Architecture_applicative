function Category(name, color) {
    this.name = name;
    this.color = color;
}

const categoryManager = CategoryManager.getInstance();
categoryManager.addCategory(new Category('Travail', 'red'));
categoryManager.addCategory(new Category('Maison', 'blue'));
categoryManager.addCategory(new Category('Divers', 'green'));
