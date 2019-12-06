import {Component, OnInit} from '@angular/core';
import {IContact} from './contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactData: IContact;

  constructor() {
    this.contactData = {
      headerI18n: 'contact.header',
      descriptionI18n: 'contact.description',
      email: 'info@schmalz.io',
      phoneNumber: '+41 76 690 66 43',
      links: [
        {
          link: 'https://www.linkedin.com/in/simon-schmalz-336333102/',
          icon: 'faLinkedIn'
        },
        {
          link: 'https://www.xing.com/profile/Simon_Schmalz',
          icon: 'faXing'
        }]
    };
  }

  ngOnInit() {
  }
}
