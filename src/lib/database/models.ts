import mongoose, { Document, model, models } from "mongoose";

export interface IBroker extends Document {    
    _id: string,
    'מס רשיון':number;
    'שם המתווך':string;
    "עיר מגורים":string;
}

const brokerSchema = new mongoose.Schema({    
    'מס רשיון': {
        type:Number,
        required:true,
        unique:true,        
    },
    'שם המתווך': String,
    "עיר מגורים": String
}, {timestamps:true})

if (!models.Broker) {
    models.Broker = model('Broker', brokerSchema);
    console.log('create new model')
  }
  else {
    console.log('model already defined')
  }
  
  export const Broker = models.Broker;