const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

let todos = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/tasks', (req, res) => {
    res.status(200).json(todos);
});

app.post('/task', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).send('Task is required');
    }
    todos.push(task);
    res.status(201).send({ message: 'Task added', task: task });
});

app.delete('/task/:taskId', (req, res) => {
    const { taskId } = req.params;
    todos = todos.filter((_, index) => index != taskId);
    res.status(200).send('Task deleted');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));