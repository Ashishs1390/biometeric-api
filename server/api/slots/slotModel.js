import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    date:{
        type:String,
    },
    timeZone:{
        type:String
    },
    timeSlots:[
        {
            booked:Boolean,
            startTime:String,
            endTime:String
        }
    ]
    
});
export default mongoose.model('slots',slotSchema);