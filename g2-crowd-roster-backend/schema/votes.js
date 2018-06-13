const mongoose = require('mongoose');
const votesSchema = mongoose.Schema({
    name:{
        type:String
    },
    likes:{
        type:Number
    }

});
const Votes = module.exports = mongoose.model('Votes',votesSchema);

module.exports.getname = function(data,callback){
  
    var query = {name:data.name};
    Votes.findOne(query,callback);
    }

    module.exports.addname = function(data,callback){
        data.save(callback);
    }
    module.exports.increment = function(name,callback){
        console.log('incrementing')
       var query = {name:name}
       console.log(name);
        Votes.updateOne(query,{ $inc: { likes: 1}},callback);
    }
    module.exports.decrement = function(name,callback){
        console.log('decrementing')
         var query = {name:name}
        

         console.log(name)
         Votes.updateOne(query,{ $inc: {likes: -1}},callback);
     }

     module.exports.getallvotes = function(callback){
         Votes.find({},callback);
     }

     module.exports.findbyname = function(name, callback){
         console.log("hey " + name)
         var query = { name:name}
         Votes.findOne(query,callback);
     }