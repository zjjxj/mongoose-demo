var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    sno : String,
    name:String,
    age: Number,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
});
StudentSchema.statics ={
    
    findBySno:function(sno, cb){
        return this
            .findOne({sno:sno})
            .exec(cb)
    }
}
 module.exports = StudentSchema;
