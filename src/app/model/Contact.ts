import { Serializable } from 'app/interface/Serializable';

export class Contact extends Serializable {
  
  firstName: String;
  lastName:String;
  email:String;
  phone:String;
  address: String;
  city: String;
  state:String;
  pincode:Number;  

  constructor(json: any) {
  	super(json);
  }
}