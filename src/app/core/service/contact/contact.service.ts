import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contacts.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    constructor( public database: AngularFirestore) { 
    }

    get(): Observable<any> {
        return this.database.collection('contacts').valueChanges();
    }

    update(contact: Contact) {
     this.database.collection('contacts').doc(contact.id.toString()).update(contact);
    
    }

    create(contact: Contact){
      console.log("edo");
      console.log(contact);
      this.database.collection('contacts').doc(contact.id.toString()).set(contact);
    
    }
}
