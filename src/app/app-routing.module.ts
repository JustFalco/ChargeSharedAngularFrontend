import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargerListComponent } from './components/charger-list/charger-list.component';
import { ChargerComponent } from './components/charger/charger.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { IndividualChargerPageComponent } from './pages/individual-charger-page/individual-charger-page.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  {path: 'chargers', component: ChargerListComponent},
  {path: 'chargers/:id', component: IndividualChargerPageComponent},
  {path: 'user', component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
