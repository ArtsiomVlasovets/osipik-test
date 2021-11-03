import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userListForHtml;

  constructor(private tttt: UserService) {}

  ngOnInit() {
    this.userListForHtml = this.tttt.getUsers();
    console.log('object :>> ');
  }
}
