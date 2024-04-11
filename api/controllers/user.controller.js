const Class = require('../models/classes.model')
const ContactInfo = require('../models/contact_info.model')
const Tweet = require('../models/tweets.model')
const User = require('../models/user.model')

const getOneUser = async (request, response) => {
  try {
    // const user = await User.findOne({
    //   where: {
    //     name: 'alma'
    //   },
    //   include: [ContactInfo, Tweet, Class]
    // })
    const userContactInfo = await ContactInfo.findOne({
      where: {
        userId: 1
      }
    })
    const user = await User.findOne({
      where: {
        name: 'alma'
      }
    })
    const object = {
      user: user,
      contactInfo: userContactInfo
    }
    return response.status(200).json(object)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getOneUser
}
