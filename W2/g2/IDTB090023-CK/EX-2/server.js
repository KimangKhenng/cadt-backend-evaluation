import express from 'express';
import courses from './course.js';
const app = express();
const PORT = 3000;

app.get('/departments/:dept/courses', (req, res) => {
  const dept = req.params.dept.toUpperCase();
  const {
    level,
    minCredits,
    maxCredits,
    semester,
    instructor
  } = req.query;

  // Defensive: parse credit ranges
  const min = parseInt(minCredits);
  const max = parseInt(maxCredits);
  if (!isNaN(min) && !isNaN(max) && min > max) {
    return res.status(400).json({
      error: "Invalid credit range: minCredits cannot be greater than maxCredits"
    });
  }

  // Step 1: Filter by department
  let filtered = courses.filter(course => course.department.toUpperCase() === dept);

  // Step 2: Apply filters if provided
  if (level) {
    filtered = filtered.filter(c => c.level.toLowerCase() === level.toLowerCase());
  }

  if (!isNaN(min)) {
    filtered = filtered.filter(c => c.credits >= min);
  }

  if (!isNaN(max)) {
    filtered = filtered.filter(c => c.credits <= max);
  }

  if (semester) {
    filtered = filtered.filter(c => c.semester.toLowerCase() === semester.toLowerCase());
  }

  if (instructor) {
    const partial = instructor.toLowerCase();
    filtered = filtered.filter(c => c.instructor.toLowerCase().includes(partial));
  }

  return res.json({
    results: filtered,
    meta: {
      total: filtered.length
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
