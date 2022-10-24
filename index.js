const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

const course_category = require('./data/course_category.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Server Side in Running')
});

// All Course Category Api
app.get('/course-category', (req, res) => {
    res.send(course_category)
})

// Each Category News Show with Category Id Api
app.get('/category/:catId', (req, res) => {
    const catId = req.params.catId
    const courseCategory = courses.filter(course => course.category_id === catId)
    res.send(courseCategory)
})

// Show All Course Api
app.get('/courses', (req, res) => {
    res.send(courses)
})

// Show Course with Course Id Api
app.get('/course/:courseId', (req, res) => {
    const courseId = req.params.courseId
    const selectedCourse = courses.find(course => course._id === courseId)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})