const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')


const Tweet = connection.define('tweet', {
  comment: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  }
)

module.exports = Tweet
