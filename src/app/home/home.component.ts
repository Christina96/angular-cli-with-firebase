import { Component, OnInit } from '@angular/core';
import { ContactService } from '../core/service/contact/contact.service';
import { Contact } from '../core/models/contacts.model';
import { ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  contacts: Contact[];
  displayedColumns : string[] = ['name', 'surname', 'company', 'phone','email'];
  updateContact: Contact;
  open:boolean;

  constructor(private contact: ContactService, private route: Router) { 

    this.open=false;
    this.contact.get().subscribe(r=>{
      console.log(r);
        this.contacts = r;
      },
      err=>{
        this.contacts=[];
      });
  }

  openUpdate(contact){
    
    this.updateContact=contact;
    this.open=true;
  }

  close(){
    this.open=false;
  }
  newContact(){
    this.route.navigate(['/create']);
  }


  ngOnInit() {
  }


  
  
}
