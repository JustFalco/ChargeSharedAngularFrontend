import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ChargerListComponent } from './components/charger-list/charger-list.component';
import { ChargerRegisterFormComponent } from './components/charger-register-form/charger-register-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChargerComponent } from './components/charger/charger.component';
import { MapComponent } from './components/map/map.component';
import { IndividualChargerPageComponent } from './pages/individual-charger-page/individual-charger-page.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { MychargersComponent } from './pages/mychargers/mychargers.component';
import { MychargerlistComponent } from './components/mychargerlist/mychargerlist.component';
import { RegisterChargerComponent } from './pages/register-charger/register-charger.component';
import { ChargerListFilterComponent } from './components/charger-list-filter/charger-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    ChargerRegisterFormComponent,
    ChargerListComponent,
    ChargerComponent,
    MapComponent,
    IndividualChargerPageComponent,
    UserdetailsComponent,
    MychargersComponent,
    MychargerlistComponent,
    RegisterChargerComponent,
    ChargerListFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
