var express = require('express')
var router = express.Router()
var knex = require('../knex')

/* GET home page. */
router.post('/', function(req, res, next) {
  knex('whodunit')
  .where('murderer',req.body.murderer_input)
  .andWhere('weapon',req.body.weapon_input)
  .andWhere('room',req.body.room_input)
  .then((result)=> {
    if (result[0].didit) {
      res.send("You Found the Culprit!")
    } else {

      res.send("Nope!")
    }
  })
.catch((err)=> {
  res.send("you entered something incorrectly")
})
});

module.exports = router
