export function get(req,res,next){
    const DARRAY = [{id:1,team:"Arsenal"},{id:2,team:"Chelsea"},{id:3,team:"Liverpool"},{id:4,team:"Manchester United"},{id:5,team:"Everton"}];
    res.send(DARRAY);
}