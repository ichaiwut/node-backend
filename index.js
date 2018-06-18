const express = require('express')
const app = express()
const apiRouter = express.Router()

// Set path for API
apiRouter.get('/', (req, res) => res.json({'APIFound': true}))
apiRouter.all('*', (req, res) => res.json({'APIFound': false}))

// Execute apiRouter when point to '/api'
app.use('/api', apiRouter)

// Default path
app.get('/', (req, res) => res.send('Hello World!'))
app.all('*', (req, res) => res.send('Not Found!'))

// Express will serve on port 4000
app.listen(4000, () => console.log('Listening on port 4000!'))

