const express = require('express')
const {
  checkDb,
  syncModels
} = require('./databse/index')
const initializeRelations = require('./databse/relations')
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
    await checkDb()
    //inicializar antes de sincronizar los modelos
    initializeRelations()
    await syncModels()
    initializeExpressAndListen()
  } catch (error) {
    console.log(error)
  }
}

startApi()
