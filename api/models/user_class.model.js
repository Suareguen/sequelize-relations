const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')


const UserClass = connection.define('user_class', {
  year: {
    type: DataTypes.INTEGER
  }
},
  {
    timestamps: false
  })


module.exports = UserClass
