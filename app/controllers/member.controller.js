const db = require("../models");
const Member = db.members;
const Op = db.Sequelize.Op;

// Create and Save a new Member
exports.create = (req, res) => {

  const member = {
    userName: req.body.userName, 
    firstName: req.body.firstName, 
    lastName: req.body.lastName,  
    email: req.body.email,
    phone: req.body.phone,  
    county: req.body.county,  
    fieldExpertise: req.body.fieldExpertise, 
    academicLevel: req.body.academicLevel,
    course: req.body.course,
    highSchoolName: req.body.highSchoolName,
    churchName: req.body.churchName,
    userType: req.body.userType,
    visibilityStatus: req.body.visibilityStatus, 
    password: req.body.password,
    // bio, photoURL, userType, and verified are removed as they are not present in the new model
  };
  

  // Save Member in the database
  Member.create(member)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member."
      });
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Member.findAll({ where: condition },)
    .then(data => {
      // res.send(data);
      return res.json({
        status: 0,
        message: `Success`,
        data:data
       });

    })
    .catch(err => {
      console.log("err",err)
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occurred while retrieving members."
      // });

      return res.json({
        status: 0,
        message: err.message || "Some error occurred while retrieving members.",
       });
    });

};


// Retrieve a single member by ID including followers and following
exports.findOne = (req, res) => {
  const userId = req.params.id;

  // Find the member by ID and include their followers and following
  Member.findByPk(userId, )
  .then(member => {
    if (!member) {
      res.status(404).send({ message: `Member with id=${userId} not found.` });
    } else {
      res.status(200).send(member);
    }
  })
  .catch(error => {
    res.status(500).send({ message: 'Error retrieving member: ' + error.message });
  });
};


// Update a Member by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Member.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Member with id=" + id
      });
    });
};

// Delete a Member with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Member.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Member with id=${id}. Maybe Member was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Member with id=" + id
      });
    });
};

// Delete all Members from the database.
exports.deleteAll = (req, res) => {
  Member.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Members were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all members."
      });
    });
};

// find all published Member
exports.findAllPublished = (req, res) => {
  Member.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    });
};

