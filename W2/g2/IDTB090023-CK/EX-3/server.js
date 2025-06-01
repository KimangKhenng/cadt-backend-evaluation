// server.js
import express from 'express';
import logger from './logger.js';
import validateQuery from './validateQuery.js';
import auth from './auth.js'; // Optional
import courses from './courses.js';

const app = express();
const PORT = 3000;

// Apply global middleware
app.use(logger);
// app.use(auth); // Uncomment this line to apply authentication globally

// Route: /departments/:dept/courses
app.get('/departments/:dept/courses', validateQuery, auth, (req, res) => {
  const dept = req.params.dept.toUpperCase();
  const {
    level,
    minCredits,
    maxCredits,
    semester,
    instructor
  } = req.query;

  let filtered = courses.filter(c => c.department.toUpperCase() === dept);

  if (level) {
    filtered = filtered.filter(c => c.level.toLowerCase() === level.toLowerCase());
  }

  if (minCredits) {
    filtered = filtered.filter(c => c.credits >= parseInt(minCredits));
  }

  if (maxCredits) {
    filtered = filtered.filter(c => c.credits <= parseInt(maxCredits));
  }

  if (semester) {
    filtered = filtered.filter(c => c.semester.toLowerCase() === semester.toLowerCase());
  }

  if (instructor) {
    const search = instructor.toLowerCase();
    filtered = filtered.filter(c => c.instructor.toLowerCase().includes(search));
  }

  res.json({
    results: filtered,
    meta: { total: filtered.length }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
