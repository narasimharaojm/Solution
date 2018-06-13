const mongoose = require('mongoose');
const visitorSchema = mongoose.Schema({
    visitor:{
        type:String
    },
    name:{
        type:String
    }

});
const Visitor = module.exports = mongoose.model('Visitor',visitorSchema);
/*
module.exports.getProductByName = function(name,callback){
const query = {productName:name};
Product.find(query,callback);
}

module.exports.addToCart = function(newItem,callback){
newItem.save(callback); 
}
module.exports.getCart = function(callback){
Cart.find(callback); 
}*/

module.exports.getvisitor = function(data,callback){
var query = {visitor:data.visitor,name:data.name};
Visitor.findOne(query,callback);
}

module.exports.addvisitor = function(data,callback){
    console.log('adding');
    data.save(callback);
}

module.exports.deletevisitor = function(data,callback){
    console.log('deleting');
    var query = {visitor:data.visitor,name:data.name};
    Visitor.remove(query,callback);
}
/*
module.exports.findandmodify = function(item,callback){


var query = {username:item.username,name:item.name};
Cart.findOneAndUpdate(query,{quantity:item.quantity,price:item.price,brand:item.brand},{upsert: true},callback);
}

module.exports.getallproducts = function(callback){
Cart.find(callback);
}

module.exports.removeproducts = function(data,callback){
var query = {username:data.username,name:data.name};
Cart.findOneAndRemove(query,callback);
}*/