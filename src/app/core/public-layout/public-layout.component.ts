import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
})
export class PublicLayoutComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Inicio sesion',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Crear cuenta',
      url: '/register',
      icon: 'person-add'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
