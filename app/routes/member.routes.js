module.exports = app => {
    const members = require("../controllers/member.controller.js");
  
    var router = require("express").Router();
  
    // Create a new member
    router.post("/", members.create);
  
    // Retrieve all members
    router.get("/", members.findAll);
  
    // Retrieve all published members
    router.get("/published", members.findAllPublished);
  
    // Retrieve a single member with id
    router.get("/:id", members.findOne);
  
    // Update a member with id
    router.put("/:id", members.update);
  
    // Delete a member with id
    router.delete("/:id", members.delete);
  
    // Delete all members
    router.delete("/", members.deleteAll);


    app.use('/api/members', router);
  };
  