const express = require('express');
const router = express.Router();
const Votes = require('../schema/votes');
const Visitor = require('../schema/visitor');
var uuid = require('uuid');


router.post('/visitor',(req,res,next)=>{
    let visitor = new Visitor({
        visitor:req.body.visitor,
        name:req.body.name,
    });

    Visitor.getvisitor(visitor,(err,data)=>{
       // console.log("reached");
        if(err){
            res.json({success:false,msg:'did not find visitor'})
        }
        else{
            if(data===null){
               Visitor.addvisitor(visitor,(err,resp)=>{
                   if(err){
                       res.json({success:false,msg:err})
                   }
                   else{
                      // res.json({success:true,msg:"added"});
                      console.log("okay adding")
                       Votes.increment(visitor.name,(err,data)=>{
                        if(err){
                            res.json({success:false,msg:err})
                        }
                        else{
                            console.log('ok added adn incremented')
                            res.json({success:true,msg:'incremented'})
                        }
                        
                       })
                   }
               });
            }
            else{
                Visitor.deletevisitor(visitor,(err,resp)=>{
                    if(err){
                        res.json({success:false,msg:err})
                    }
                    else{
                        Votes.findbyname('Ludwig Gerdes',(err,data)=>{
                            if(err) throw err;
                            else{
                              
                                if(data.likes>0){
                                    Votes.decrement(visitor.name,(err,data)=>{
                                        console.log("ok deleting")
                                        if(err){
                                            res.json({success:false,msg:err})
                                        }
                                        else{
                                            console.log('ok deleted')
                                            res.json({success:true,msg:'decremented'});
                                        }
                                        
                                       });
                                }
                            }
                        });

                    }
                });
                //delete 
                //and decrement
            }
        }
    });
});

router.get('/votes',(req,res,next)=>{
   
    if(req.query.info){
        req.query.info.forEach(element => {
            let vote = new Votes({
                name: JSON.parse(element).name ,
                likes:JSON.parse(element).votes
            });
            Votes.getname(vote,(err,data)=>{
                // console.log("reached")
                 if(err){
                     res.json({success:false,msg:'err'})
                 }
                 else{
                     if(data ===null){
                         console.log("adding to db00");
                         Votes.addname(vote,(err,resp)=>{
                             if(err){
                                 res.json({success:false,msg:'err'})
                             }
                             else{
                                 res.json({success:true,msg:resp});
                             }
                         });
                         
                     }
                 }
             });
        });
    }

   
   

});

router.get('/getid',(req,res,next)=>{
   
    res.json({id:uuid.v4()});


});

router.get('/getallvotes',(req,res,next)=>{
    Votes.getallvotes((err,data)=>{
        if(err){
            res.json({success:false, msg:err})
        }
        else{
            res.json({success:true,msg:data});
        }
    });

});
router.get('/findbyname',(req,res,next)=>{
    console.log("dude..")
    console.log(req.query.name);
    Votes.findbyname(req.query.name,(err,info)=>{
        if(err){
            res.json({success:false, msg:err})
        }
        else{
            res.json({success:true,msg:info});
        }
    });

});



module.exports = router;