import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { NotificationsService } from 'angular2-notifications';

import { Contact } from '../model/Contact';
import { ContactService } from '../service/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  searchString: String;
  contact:Contact; 
  contactList:Contact[]; 
	subscription:Subscription;

  constructor(private contactService: ContactService, private _service: NotificationsService) { 

    this.contact = new Contact(Contact);
    
  }

  
    public options = {
        position: ["top", "right"],
        timeOut: 0,
        lastOnBottom: true,
    };
   
  ngOnInit() {
   
     this.subscription = this.contactService.getContactList().subscribe(res => {
				        
       this.contactList = res;

      console.log(res)            

			},
				err => {
					console.log(err);
				},
				() => {
					console.log('Completed!');
				});
  }



  addContact(){

       this.subscription = this.contactService.postContactData(this.contact).subscribe(res => {
				        
       this.contact = res;
         this._service.success(
            '200 Sucess',
            'Contact added successfully',
            {
                timeOut: 4000,
                showProgressBar: false,
                pauseOnHover: false,
                clickToClose: true,
               
            }
        )
          
       this.ngOnInit()
       
			 console.log(res)            

			},
				err => {
					console.log(err);

           this._service.error(
            '404 Not Found',
            'Connection Server Error',
            {
                timeOut: 4000,
                showProgressBar: false,
                pauseOnHover: false,
                clickToClose: true,
               
            }
        )
				},
				() => {
					console.log('Completed!');
				});
  }


   searchContactByFirstName(firstName){
        
       if(firstName == "")
          this.ngOnInit()
       else{   
        this.subscription = this.contactService.searchByFirstName(firstName).subscribe(res => {
                  
        this.contactList = res;
      
        
        console.log(res)            

        },
          err => {
            console.log(err);
          },
          () => {
            console.log('Completed!');
          });
       }     
  }

    deleteContact(contactId){

       this.subscription = this.contactService.deleteContactData(contactId).subscribe(res => {
				        
       this.contact = res;
       	        
       this.contact = res;
         this._service.success(
            '200 Sucess',
            'Contact deleted successfully',
            {
                timeOut: 4000,
                showProgressBar: false,
                pauseOnHover: false,
                clickToClose: true,
               
            }
        )
          
       this.ngOnInit()
       
			 console.log(res)            

			},
				err => {
					console.log(err);
            this._service.error(
          '404 Not Found',
          'Connection Server Error',
          {
              timeOut: 4000,
              showProgressBar: false,
              pauseOnHover: false,
              clickToClose: true,
              
          }
        )
				},
				() => {
					console.log('Completed!');
				});
  }




   openModal(){

    this.contact = new Contact(Contact);

   }
  
  editContact(contact){

    this.contact = contact;

  } 

  ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
