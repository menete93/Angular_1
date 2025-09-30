import { Component } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'epayment';



isSideNavCollapsed = false;
sceenWidth = 0;

onToggleSideNav(data:SideNavToggle):void{
  this.sceenWidth=data.screenWidth;
this.isSideNavCollapsed = data.collapsed;
}

}


