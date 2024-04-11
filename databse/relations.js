const User = require('../api/models/user.model.js')
const Tweet = require('../api/models/tweets.model.js')
const ContactInfo = require('../api/models/contact_info.model.js')
const Class = require('../api/models/classes.model.js')
const UserClass = require('../api/models/user_class.model.js')



const initializeRelations = () => {
  try {
    //here relations

    //One To One
    User.hasOne(ContactInfo)
    ContactInfo.belongsTo(User)

    // One to Many

    User.hasMany(Tweet)
    Tweet.belongsTo(User)

    // Many to Many

    User.belongsToMany(Class, { through: UserClass })
    Class.belongsToMany(User, { through: UserClass })

  } catch (error) {
    console.log(error)
  }
}


module.exports = initializeRelations
