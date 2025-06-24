// server.js
import express from 'express';
import courses from "./course.js";
import { validateQuery } from './Middleware/validateQuery.js';
import { logger } from './Middleware/logger.js';
import { authenticate } from './Middleware/auth.js';

const app = express();
const PORT = 3000;

app.use(logger);
app.use(validateQuery);
app.use(authenticate);

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria

    const min = minCredits ? parseInt(minCredits) : null;
    const max = maxCredits ? parseInt(maxCredits) : null;

    let filteredCourses = courses.filter(course => course.department === dept);

    if (level){
        filteredCourses = filteredCourses.filter(course => course.level === level);
    }

    if(min !== null){
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(minCredits));
    }

    if(max !== null){
        filteredCourses = filteredCourses.filter(course => course.credits <= parseInt(maxCredits));
    }

    if(semester){
        filteredCourses = filteredCourses.filter(course => course.semester === semester);
    }

    if(instructor){
        filteredCourses = filteredCourses.filter(course => course.instructor === instructor);
    }

    res.json(filteredCourses);
});

app.get('/departments', (req, res) => {
    res.json(
        {
            courseslist: courses,
            meta:{
                total: courses.length,
            }
        }
    );
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
