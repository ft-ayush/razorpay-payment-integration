const express = require('express')
const cors = require('cors')
const router = require('./routes/payments.routes')
const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})