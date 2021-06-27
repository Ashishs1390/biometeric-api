import Slots from './slotModel';
import mongoose from 'mongoose';

const timeSlots = [
    {
        startTime:"10:00",
        endTime:"10:30",
        booked:false
    },
    {
        startTime:"10:30",
        endTime:"11:00",
        booked:false
    },
    {
        startTime:"11:00",
        endTime:"11:30",
        booked:false
    },
    {
        startTime:"11:30",
        endTime:"12:00",
        booked:false
    },{
        startTime:"12:00",
        endTime:"12:30",
        booked:false
    },{
        startTime:"12:30",
        endTime:"01:00",
        booked:false
    },{
        startTime:"01:00",
        endTime:"01:30",
        booked:false
    },{
        startTime:"01:30",
        endTime:"02:00",
        booked:false
    },{
        startTime:"02:00",
        endTime:"02:30",
        booked:false
    },{
        startTime:"02:30",
        endTime:"03:00",
        booked:false
    },{
        startTime:"03:00",
        endTime:"03:30",
        booked:false
    },{
        startTime:"03:30",
        endTime:"04:00",
        booked:false

    },{
        startTime:"04:00",
        endTime:"04:30",
        booked:false
        
    },{
        startTime:"04:30",
        endTime:"05:00",
        booked:false
    }
];

export function post(req,res,next){
    const {date,timeZone} = req.body;
    //get One

    console.log(timeSlots);
    const slot = new Slots({
        _id: new mongoose.Types.ObjectId(),
        date,
        timeZone,
        timeSlots
    });
    slot.save().then(result =>{
        console.log(result);
        res.json(result)
    })
    .catch(err=>{   
        console.log(err)
        next(err);
    });
}

export function slotBook(req,res,next){
    const {date,startTime,duration} = req.body;
    Slots.find({date}).then((result)=>{
        console.log(result);
        let openSlot = result[0].timeSlots.filter((val)=> val.startTime == startTime);
        let otherSlots = result[0].timeSlots.filter((val)=> val.startTime !== startTime);

        console.log(openSlot);
        openSlot[0].booked = true;
        console.log(otherSlots);
        otherSlots.push(...openSlot);


        res.send(otherSlots);
    }).catch((err)=>{
        console.log(err);
    })



}




