module.exports = (sequelize, Sequelize) => {
  const Member = sequelize.define("members", {
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    county: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fieldExpertise: {
      type: Sequelize.STRING,
      allowNull: false
    },
    academicLevel: {
      type: Sequelize.STRING
    },
    course: {
      type: Sequelize.STRING
    },
    highSchoolName: {
      type: Sequelize.STRING
    },
    churchName: {
      type: Sequelize.STRING
    },
    userType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    visibilityStatus: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });

  return Member;
};
