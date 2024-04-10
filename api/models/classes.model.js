const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')


const Class = connection.define('class', {
  name: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  }
)

module.exports = Class
