import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rajpack-navbar',
  templateUrl: './rajpack-navbar.component.html',
  styleUrls: ['./rajpack-navbar.component.scss']
})
export class RajpackNavbarComponent implements OnInit {
  public openMenu : boolean;
  public links : Array<Object>;

  constructor() {
    this.openMenu = false;
    this.links = [
      {
        name: 'Contact Us',
        hash: '#contact'
      },
      {
        name: 'Work Place',
        hash: '#workplace'
      },
      {
        name: 'Machineries',
        hash: '#machineries'
      },
      {
        name: 'About Us',
        hash: '#about'
      },
      {
        name: 'Home',
        hash: '#home'
      }
    ];
  }

  ngOnInit() {
  }

  changeMenuState() {
    this.openMenu = !this.openMenu;
  }

}
