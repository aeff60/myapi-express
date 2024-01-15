const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

const students = [];

app.post('/students', (req, res) => {
    const student = req.body;

    students.push(student);

    res.json(student);
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id === id);
    res.json(student);
});


app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const student = req.body;
    const index = students.findIndex(s => s.id === id);
    students[index] = student;
    res.json(student);
})


app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    const index = students.findIndex(s => s.id === id);
    const student = students.splice(index, 1);
    res.json(student);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
