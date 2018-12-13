import { Injectable, Component} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Contact } from '../core/models/contacts.model';
import { ContactService } from '../core/service/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  contact: Contact;

  constructor( public contactService: ContactService,private route: Router) { 
    
    this.contact={
      id: 0 ,
      name: '',
      surname: '',
      phone:'',
      email:'',
      company:''
    };

    this.contactService.get().subscribe(r=>{
      console.log(r.length);
        this.contact.id = r.length;
      },
      err=>{
        this.contact.id=1;
      })
  }

  create(contact: Contact){
    this.contactService.create(contact);
    this.route.navigate(['/home']);
  }
}
