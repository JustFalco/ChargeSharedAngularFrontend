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
  newUserForm = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(''),
    lastName: new FormControl(),
  });

  constructor(public http: HttpClient, public auth: AuthorizationService) {
    
    http.get<User>(`https://localhost:7234/api/user/${auth.getEmail()}`).subscribe(
      (result) => {
        this.user = result;
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
    if (this.newUserForm.valid) {
      console.log(this.newUserForm.value)
      this.http.put<User>(
        `https://localhost:7234/api/user/${this.auth.getEmail()}`,
        JSON.stringify(this.newUserForm.value)
      ).subscribe((result) => {
        this.user = result
        console.log(result)
      },
      (error) => console.error(error)
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
