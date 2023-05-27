const express = require('express')

const app = express()

const port = 7000
app.use(express.json())

const userRoute=require('./routes/userRoute')
app.use('/api/user/',userRoute);
const dbConnect=require('./dbConnect')
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))