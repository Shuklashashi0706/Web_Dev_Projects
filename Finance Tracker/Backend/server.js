const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()
app.use(cors());


// Connect Database
connectDB()

// Init middlewares
app.use(express.json({ extended: false }))

// Define Routes
// app.use('/api/users', require('./routes/api/users'))
// app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/posts', require('./routes/api/posts'))

app.get('/', (req, res) => res.send('Api Running'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started at ${PORT} `))


