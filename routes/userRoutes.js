var express=require('express')
var router=express.Router()
var userCtrl=require('../controller/userController')

router.post('/student',userCtrl.addStudent)
router.get('/students',userCtrl.getStudents)

router.get('/student/:id',userCtrl.getStudent)
router.delete('/student/:id',userCtrl.deleteStudent)

router.put('/student/:id',userCtrl.updateStudent)

module.exports=router