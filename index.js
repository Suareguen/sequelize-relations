const express = require('express')
const app = express()

const initializeExpressAndListen = () => {
  try {
    app.use(express.json())
    app.use('/api', require('./api/routes/index'))
    app.listen(3003, () => {
      console.log('Server started')
    })
  } catch (error) {
    console.log(error)
  }
}

const startApi = async () => {
  try {
    initializeExpressAndListen()
  } catch (error) {
    console.log(error)
  }
}

startApi()
