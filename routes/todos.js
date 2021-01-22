let Todos = require('../models/todos.model');
const auth = require('../middleware/auth');
let User = require('../models/user1.model');
const router = require('express').Router();

global.currentUser;

router.post("/add", auth ,async(req,res)=> { 

 // const { todos, _id} = req.body; //add current user._id to this line'

  const { taskName, _user} = req.body; //add current user._id to this line'
  global.currentUser = _user;
 
 
    
      

  
      const newTask = new Todos({
        taskName,
         user:_user
        
      });
      newTask.save()
      .then(() => res.json('Task added'))
      .catch(err => res.status(400).json('Error:' + err));
    })

    // if logout, clear 
    if(!auth){
      global.currentUser = null;  
    
    }

    router.get('/', auth,async(req,res)=> { 
      
      Todos.find({user: global.currentUser})
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));

 
      // .then(todos => res.json(todos))
      // .catch(err => res.status(400).json('Error:' + err));


     // console.log("wtf:"+req.params.currentUserID);
 
      // Todos.find()
      
        })

        
     router.route('/:id',auth).delete((req,res)=>{
    Todos.findByIdAndDelete(req.params.id)
    .then(() => res.json('todo deleted'))
    .catch(err => res.status(400).json('Error:' + err));

  }); 
     
  

  module.exports = router;