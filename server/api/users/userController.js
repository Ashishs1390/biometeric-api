import User from './userModel';

export function get(req,res,next){
    User.find({})
        .then(function(users){
            res.json(users);
        },function(err){
            next(err);
        });
}

export function post(req,res,next){
    const username = req.body;
    User.create(username)
    .then(function(user) {
      console.log(user);
      res.json(user);
    }, function(err) {
      next(err);
    });
}