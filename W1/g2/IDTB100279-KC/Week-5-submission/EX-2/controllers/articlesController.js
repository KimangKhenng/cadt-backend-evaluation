import { articles } from "../models/data.js";

const getAllArticles = async (req, res) => {
    return res.status(200).json(articles);
}

const getArticleById = async (req, res) => {
    const { id } = req.params;
    const article = articles.find(article => article.id === parseInt(id));
    if (!article) {
        return res.status(404).json({ message: "Article not found" });
    }
    return res.status(200).json(article);
}

const createArticle = async (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ message: "Title, content, journalistId and categoryId are required" });
    }

    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId,
        categoryId
    };
    articles.push(newArticle);
    return res.status(201).json(newArticle);
}

const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, content, journalistId, categoryId } = req.body;

    const article = articles.find(a => a.id === parseInt(id));
    if (!article) {
        return res.status(404).json({ message: "Article not found" });
    }

    if (title) article.title = title;
    if (content) article.content = content;
    if (journalistId) article.journalistId = journalistId;
    if (categoryId) article.categoryId = categoryId;

    return res.status(200).json(article);
}

const deleteArticle = async (req, res) => {
    const { id } = req.params;
    const index = articles.findIndex(a => a.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: "Article not found" });
    }

    articles.splice(index, 1);
    return res.status(204).send();
}

export { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle };