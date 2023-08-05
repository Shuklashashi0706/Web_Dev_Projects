const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser');

const app = express()
app.use(cors());


// Connect Database
connectDB()

// Init middlewares
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/clubs', require('./routes/api/clubs'))
app.use('/api/profile', require('./routes/api/profile'))

app.get('/', (req, res) => res.send('Api Running'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started at ${PORT} `))


