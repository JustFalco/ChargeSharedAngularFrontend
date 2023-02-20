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
  user?: User
  newUserForm = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(''),
    lastName: new FormControl(),
  });


  constructor(public http: HttpClient, public auth: AuthorizationService) {
    http.get<User>(`/api/user/${auth.getEmail()}`).subscribe(
      (result) => {
        this.user = result;
      },
      (error) => console.error(error)
    );
  }

  wijzigGegevens(){
    if(this.newUserForm.valid){
      this.http.put(`https://localhost:7234/api/user/${this.auth.getEmail}`, JSON.stringify(this.newUserForm.value))
    }
  }
}

interface User{
  firstName:string
  middleName: string
  lastName: string
  email: string
}