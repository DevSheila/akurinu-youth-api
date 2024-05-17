module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("communityuser", {
    displayName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    
    bio: {
      type: Sequelize.STRING
    },
    joined: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    photoURL: {
      type: Sequelize.STRING
    },
    userType: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    wallpaper: {
      type: Sequelize.STRING
    }
  });

  return User;
};

