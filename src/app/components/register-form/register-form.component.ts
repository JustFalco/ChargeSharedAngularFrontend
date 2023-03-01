import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  newLoginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    passwordRepeat: new FormControl(),
    userAgreementAccept: new FormControl()
  });

  constructor(private apiService: ApiService, private router: Router) {}

  public register() {
    if (this.newLoginForm.invalid) {
      alert('Form is invalid!');
      this.newLoginForm.reset();
      return;
    }
    if (!this.checkMatchingPasswords()) {
      alert('Passwords must be the same!');
      this.newLoginForm.reset();
      return;
    }

    this.apiService.register(
      this.newLoginForm.value.email,
      this.newLoginForm.value.password
    );

    this.router.navigateByUrl(`/`);
  }

  public checkMatchingPasswords(): boolean {
    return (
      this.newLoginForm.value.password ===
      this.newLoginForm.value.passwordRepeat
    );
  }
}
