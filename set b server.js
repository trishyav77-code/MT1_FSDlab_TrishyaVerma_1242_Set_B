const express = require('express');
const app = express();

app.use(express.json());

// Student data
let students = [
    {
        id: 201,
        rollNumber: 2503201001242,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 3,
        email: "aarav@example.com"
    },
    {
        id: 202,
        rollNumber: 2503201001243,
        name: "Diya Verma",
        branch: "ECE",
        semester: 3,
        email: "diya@example.com"
    },
    {
        id: 203,
        rollNumber: 2503201001244,
        name: "Kabir Singh",
        branch: "CSE",
        semester: 3,
        email: "kabir@example.com"
    }
];

app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});