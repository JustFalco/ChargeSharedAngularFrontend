import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from '../../core/services/authorization.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public forecasts?: string[];
  public isAuthenticated?: Observable<boolean>;

  constructor(
    http: HttpClient,
    private authorizeService: AuthorizationService
  ) {
    http.get<string[]>('/api/test').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
  }

  title = 'ChargeSharedFrontend';
}
