import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userprofile = null;
  componentRef = null;
  componentRef2 = null;
  title = 'Mohit Bhole';
  screenheight = 0;
  screenwidth = 0;
 items: NbMenuItem[] = [
    {
      title: 'Matching Profiles',
      link: '/profiles',
      icon: 'people-outline',
    },
    {
      title: 'Add/Edit User',
      link: '/user',
      icon: 'person-add-outline',
    }
   ];

  constructor(
  ) {
  }

  ngAfterViewInit() {
    // this.onResize();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event?) {
  //   this.screenheight = window.innerHeight;
  //   this.screenwidth = window.innerWidth;
  //   //console.log(this.screenheight/this.screenwidth); //1.02
  // }
}