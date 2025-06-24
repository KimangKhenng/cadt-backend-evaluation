import { journalists } from "../models/data.js";

const getAllJournalists = async (req, res) => {
    return res.status(200).json(journalists);
}

const getJournalistById = async (req, res) => {
    const { id } = req.params;
    const journalist = journalists.find(journalist => journalist.id === parseInt(id));
    if (!journalist) {
        return res.status(404).json({ message: "Journalist not found" });
    }
    return res.status(200).json(journalist);
}

const createJournalist = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };
    journalists.push(newJournalist);
    return res.status(201).json(newJournalist);
}

const updateJournalist = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === parseInt(id));
    if (!journalist) {
        return res.status(404).json({ message: "Journalist not found" });
    }

    if (name) journalist.name = name;
    if (email) journalist.email = email;

    return res.status(200).json(journalist);
}

const deleteJournalist = async (req, res) => {
    const { id } = req.params;
    const index = journalists.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: "Journalist not found" });
    }

    journalists.splice(index, 1);
    return res.status(204).send();
}

const articleByJournalist = async (req, res) => {
    const { id } = req.params;
    const journalist = journalists.find(j => j.id === parseInt(id));
    if (!journalist) {
        return res.status(404).json({ message: "Journalist not found" });
    }

    const articles = journalist.articles || [];
    return res.status(200).json(articles);
}

export { getAllJournalists, getJournalistById, createJournalist, updateJournalist, deleteJournalist, articleByJournalist };