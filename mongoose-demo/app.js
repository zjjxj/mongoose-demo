var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var StudentModel = require("./models/student");
var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/stu');

app.set('views','./views');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({    extended: true }));

app.get("/",function(req,res){
    res.render("main",{
        title:'数据录入'
    })
    

})

//录入数据
app.post("/admin",function(req,res){
    var _stu= req.body.student;
    var student = new StudentModel({
        sno:_stu.sno,
        name:_stu.name,
        age:_stu.age

    });
    student.save(function(err){
        console.log(err);

    });
    res.redirect('/');
})

//查找全部
app.get('/findAll',function(req,res){
    StudentModel.find(function(err,students){
        console.log(students);
        res.end(JSON.stringify(students));
    });
});

//按学号查找
app.get('/findOne/:sno',function(req,res){
    var sno=req.params.sno;

    if(sno) {
        StudentModel.findBySno(sno,function(err,student){
            console.log(student);
            res.end( JSON.stringify(student));
        })
    }
})

app.listen(3000);
console.log("started at port 3000");