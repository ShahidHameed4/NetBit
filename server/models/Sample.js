import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const SampleSchema = new Schema({


    name:{ type:String, required:true},
    email:{ type:String, required:true},
    phone:{ type:String, required:true},
    address:{ type:String, required:true},

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},{timestamps:true});


const Sample = mongoose.model('Sample', SampleSchema);

export default Sample;