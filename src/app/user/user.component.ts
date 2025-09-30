import { Component } from '@angular/core';
import { DUMMY_USERS } from '../models/dummy-user.ts.service';


@Component({
    selector: 'app-user',
    // standalone: true,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    standalone: false
})
export class UserComponent {
  selectedUser: any;



  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }


  onSelectUser() {
    const ramdomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[ramdomIndex]


  }

}
