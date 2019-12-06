import {Component, Input, OnInit} from '@angular/core';
import {faLinkedinIn, faXingSquare} from '@fortawesome/free-brands-svg-icons';
import {ILink} from '../link.interface';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {

  faXing = faXingSquare;
  faLinkedIn = faLinkedinIn;

  @Input()
  links: ILink[];

  constructor() { }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
