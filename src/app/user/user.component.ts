import { Component, signal, computed, Input } from '@angular/core';
import { DUMMY_USERS } from '../models/dummy-user.ts.service';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false
})

export class UserComponent {
  @Input({ required: true }) avatar!: String
  @Input({ required: true }) name!: String
  selectedUser = signal(DUMMY_USERS[randomIndex]); // sinal reativo

  // imagePath = computed(() =>
  //   this.selectedUser() ? 'assets/users/' + this.selectedUser()!.avatar : ''
  // );


  get imagePath() {
    return 'assets / users / ' + this.avatar;
  }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
