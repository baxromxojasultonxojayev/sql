const router = require('express').Router()
const users = require('../models/userModel')
const referal = require('../models/referalModel')


router.get('/', async (req, res)=>{
  let people = await users.getUsers()
  let data_referal = await referal.getReferals()
  console.log(data_referal);
  res.render('index', {
    people,
    data_referal
  })
})

router.post('/', async (req, res)=>{
  console.log(req.body);
  await users.createUser(req.body.name, req.body.age, req.body.referal)
  res.redirect('/')
})

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  await users.deleteUsers(id)
  res.redirect('/')
})


router.get('/:id', async(req, res) => {
  const {id} = req.params;
  console.log(id);
  await users.updateUsers(id)
  res.redirect('/')
})


module.exports = {
  path: "/",
  router
}