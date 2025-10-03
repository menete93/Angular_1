import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './models/dummy-user.ts.service';
import { SidenavComponent } from "./sidenav/sidenav.component";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  // imports: [HeaderComponent, UserComponent]

})
export class AppComponent {
  title = 'epayment';



  isSideNavCollapsed = false;
  sceenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.sceenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  users = DUMMY_USERS;


}


