var mongoose = require('mongoose');
var StudentSchema = require("../schemas/student");
var StudentModel = mongoose.model('StudentModel',StudentSchema);

module.exports=StudentModel;

