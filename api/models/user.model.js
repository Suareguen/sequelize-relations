const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')


const User = connection.define('user', {
  name: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  })


module.exports = User
