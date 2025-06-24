// server.js
import express from 'express';
import courses from './course.js';

const app = express();
const PORT = 3000;

// Middleware Functions
const validateQuery = (req, res, next) => {
    const { minCredits, maxCredits } = req.query;

    if (minCredits && isNaN(parseInt(minCredits))) {
        return res.status(400).json({ error: "400 Bad Request: minCredits must be a number" });
    }

    if (maxCredits && isNaN(parseInt(maxCredits))) {
        return res.status(400).json({ error: "400 Bad Request: maxCredits must be a number" });
    }

    if (minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)) {
        return res.status(400).json({ error: "400 Bad Request: minCredits cannot be greater than maxCredits" });
    }

    next();
};

const logger = (req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.originalUrl}`);
    console.log('Query Parameters:', req.query);
    next();
};

const VALID_TOKEN = "xyz123";

const authenticate = (req, res, next) => {
    const token = req.query.token;
    if (!token || token !== VALID_TOKEN) {
        return res.status(401).json({ error: "Unauthorized. Invalid or missing token." });
    }
    next();
};

// Apply Middlewares
app.use(logger);
app.use(validateQuery);
app.use(authenticate);

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    // Filtering Logic
    let filteredCourses = courses.filter(course => 
        course.department.toLowerCase() === dept.toLowerCase()
    );

    if (level) {
        filteredCourses = filteredCourses.filter(course => course.level === level);
    }

    if (minCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(minCredits));
    }

    if (maxCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits <= parseInt(maxCredits));
    }

    if (semester) {
        filteredCourses = filteredCourses.filter(course => 
            course.semester.toLowerCase() === semester.toLowerCase()
        );
    }

    if (instructor) {
        filteredCourses = filteredCourses.filter(course => 
            course.instructor.toLowerCase().includes(instructor.toLowerCase())
        );
    }

    res.json({
        department: dept,
        totalCourses: filteredCourses.length,
        courses: filteredCourses
    });
});

// Route: GET /departments (List all courses)
app.get('/departments', (req, res) => {
    res.json({
        courseslist: courses,
        meta: {
            total: courses.length,
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
