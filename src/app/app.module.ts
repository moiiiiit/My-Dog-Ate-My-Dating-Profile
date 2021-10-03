import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { SafePipeModule } from 'safe-pipe';
import {
  NbCardModule,
  NbMenuModule,
  NbSelectModule,
  NbButtonGroupModule,
  NbUserModule,
  NbIconModule,
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbSidebarModule,
  NbDatepickerModule
} from '@nebular/theme';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilesComponent
  ],
  imports: [
    SafePipeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonGroupModule,
    NbCardModule,
    NbFormFieldModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/profiles', pathMatch: 'full' },
      { path: 'user', component: HomeComponent },
      { path: 'profiles', component: ProfilesComponent },
    ]),
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    NbSelectModule,
    NbMenuModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
