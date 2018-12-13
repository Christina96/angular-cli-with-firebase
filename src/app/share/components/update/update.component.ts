import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/core/models/contacts.model';
import { ContactService } from 'src/app/core/service/contact/contact.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})


export class UpdateComponent implements OnInit {

  @Input() contact: Contact;
  updateMsg:string;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  update(){
    this.contactService.update(this.contact);
    this.updateMsg="Contact Updated Successfully"
  }

  create(){
    this.contactService.create(this.contact);
  }

}
