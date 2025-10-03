import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [CommonModule, RouterModule], // 👈 adiciona o CommonModule
  styleUrls: ['./sidenav.component.scss'],
  standalone: true
})



export class SidenavComponent {
  data: any;

  collapsed = false;
  navData = navbarData;
  screenWidth = 0;
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  toggleColappse(): void {

    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }


  closeSidenav(): void {

    this.collapsed = false
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });

  }
}
