import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthorizationService } from '../../core/services/authorization.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  newLoginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private authorizeService: AuthorizationService,
    private apiService: ApiService,
    private router: Router
  ) {}

  public login() {
    if (this.newLoginForm.invalid) {
      alert('Form is invalid!');
      this.newLoginForm.reset();
      return;
    }
    this.apiService.login(
      this.newLoginForm.value.email,
      this.newLoginForm.value.password
    );

    this.router.navigateByUrl(`/`);
  }
}
