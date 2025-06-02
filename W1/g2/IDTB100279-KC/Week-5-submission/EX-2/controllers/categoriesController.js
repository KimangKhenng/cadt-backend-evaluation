import { categories } from "../models/data.js";

const getAllCategories = async (req, res) => {
    return res.status(200).json(categories);
}

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    const category = categories.find(category => category.id === parseInt(id));
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json(category);
}

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const newCategory = {
        id: categories.length + 1,
        name
    };
    categories.push(newCategory);
    return res.status(201).json(newCategory);
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const category = categories.find(c => c.id === parseInt(id));
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }

    if (name) category.name = name;

    return res.status(200).json(category);
}

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: "Category not found" });
    }

    categories.splice(index, 1);
    return res.status(204).send();
}

const articleByCategory = async (req, res) => {
    const { id } = req.params;
    const category = categories.find(c => c.id === parseInt(id));
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }

    const articles = category.articles || [];
    return res.status(200).json(articles);
}

export { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory, articleByCategory };