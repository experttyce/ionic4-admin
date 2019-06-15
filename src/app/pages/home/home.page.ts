import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService, private usr: UserService, private alert: AlertService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login({username: 'admin', password: 'admin'}).subscribe(res => {
      this.auth.token = res.access_token;
      this.auth.storetoken();
    }, err => {
      console.log(err);
    });
  }

  profile() {
    this.usr.profile().subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
