const User = require('../api/models/user.model');
const Tweet = require('../api/models/tweets.model');
const Class = require('../api/models/classes.model');
const ContactInfo = require('../api/models/contact_info.model');


const initializeRelations = () => {
  try {
    User.hasOne(ContactInfo)
    ContactInfo.belongsTo(User)
    // Establece una relación uno a muchos entre User y Tweet
    User.hasMany(Tweet);  // Sequelize asume la clave foránea userId en Tweet
    Tweet.belongsTo(User);  // Igualmente asume la clave foránea userId en Tweet
    User.belongsToMany(Class, { through: 'user_class' })
    Class.belongsToMany(User, { through: 'user_class' })
  } catch (error) {
    console.log(error);
  }
}

module.exports = initializeRelations;
