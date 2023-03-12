import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent {
  user?: User;
  loading: boolean = false;
  color: string = "primary"

  newUserForm = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(''),
    lastName: new FormControl(),
  });

  constructor(public http: HttpClient, public auth: AuthorizationService) {
    this.loading = true
    http.get<User>(`https://chargesharedapitest.azurewebsites.net/api/user/${auth.getEmail()}`).subscribe(
      (result) => {
        this.user = result;
        this.loading = false
      },
      (error) => console.error(error)
    );
  }

  // setUserToNull(){
  //   this.user = undefined;
  //   console.log(this.user)
  // }

  wijzigGegevens() {
    console.log('Setting user data');
    this.loading = true
    if (this.newUserForm.valid) {
      console.log(this.newUserForm.value)
      this.http.put<User>(
        `https://chargesharedapitest.azurewebsites.net/api/user/${this.auth.getEmail()}`,
        JSON.stringify(this.newUserForm.value)
      ).subscribe((result) => {
        this.user = result
        console.log(result)
        this.loading = false
      },
      (error) => {
        console.error(error) 
        this.loading = false
      }
      );
    }
  }
}

interface User {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
}
