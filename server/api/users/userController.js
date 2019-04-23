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
    const newUser = req.body;
    User.create(newUser)
    .then(function(user) {
      res.json(user);
    }, function(err) {
      next(err);
    });
}