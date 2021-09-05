const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({
        data: ' Api VIVA '
    })
})

app.listen(port, () => {
    console.log('List la app por el puerto ', port)
})