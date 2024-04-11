const { Sequelize } = require('sequelize')

const connection = new Sequelize('relations', 'userTest', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false
})


const checkDb = async () => {
  try {
    await connection.authenticate()
    console.log('Connection to DB')
  } catch (error) {
    console.log(error)
  }
}


const syncModels = async () => {
  try {
    await connection.sync()
    console.log('Models added')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  connection,
  checkDb,
  syncModels
}
