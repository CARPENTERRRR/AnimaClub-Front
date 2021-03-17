import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SignupFormService} from './services/signup-form.service';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';

const routes: Routes = [
  {path: 'inscription', component: SignupFormComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SignupFormService]
})
export class AppRoutingModule { }
