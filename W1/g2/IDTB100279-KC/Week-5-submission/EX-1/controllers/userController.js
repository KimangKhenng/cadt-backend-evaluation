/* // GET /users - List all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET /users/:id - Get one user
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// POST /users - Create new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Update user
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

// DELETE /users/:id - Delete user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(index, 1);
    res.status(204).send();
}); */


import users from "../models/userModel.js";

const getAllUsers = async (req, res) => {
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    return res.status(201).json(newUser);
};

    const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);
    return res.status(204).send();
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
