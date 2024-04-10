const User = require('../models/user.model')
const ContactInfo = require('../models/contact_info.model')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    const contactInfo = await users.getContactInfo()
    console.log(contactInfo)
    return res.json(contactInfo)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllUsers
}
