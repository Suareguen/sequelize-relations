const { DataTypes } = require('sequelize')
const { connection } = require('../../databse/index')


const ContactInfo = connection.define('contactinfo', {
  address: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  }
)

module.exports = ContactInfo
