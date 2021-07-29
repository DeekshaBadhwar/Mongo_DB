const Student=require('../models/student')
require('../util/database')


module.exports.addStudent= (req,res)=>{
    var newStudent=new Student(req.body );

    return newStudent.save().then((docs)=>{
        res.status(200).json({
            success:true,
            message:'New Student Created',
            user:docs
        });
    })
    .catch((err)=>{
        res.status(401).json({
            success:false,
            message:'Error in creating new User',
            error:err.message
        });
    });
};


module.exports.getStudents=(req,res)=>{  
  
    return Student.find().then((user)=>{
         res.status(200).json({
            success:true,
            message:'jobs  found ',
            data: user
        })
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            message:'jobs not found',
            err:err.message
        })
    })
  }
  
  //get one student
  
  
module.exports.getStudent=(req,res)=>{  
    const _id=req.params.id
    return Student.findById({_id}).then((user)=>{
      
        console.log(req.params)
         res.status(200).json({
            success:true,
            message:'jobs  found ',
            data: user
        })
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            message:'jobs not found',
            err:err.message
        })
    })
  }

  //delete student
  
module.exports.deleteStudent=(req,res)=>{  
    const _id=req.params.id
    return Student.findByIdAndDelete({_id}).then((user)=>{
        console.log(req.params)
         res.status(200).json({
            success:true,
            message:'student deleted ',
            data: user
        })
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            message:'student not found',
            err:err.message
        })
    })
  }

  module.exports.updateStudent=(req,res)=>{  
    const _id=req.params.id
    return Student.findByIdAndUpdate(_id,req.body).then((user)=>{
        console.log(req.params)
         res.status(200).json({
            success:true,
            message:'student updated ',
            data: user
        })
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            message:'student not found',
            err:err.message
        })
    })
  }
