import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthorizationService } from '../../core/services/authorization.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  public isAuthenticated?: Observable<boolean>;
  public userName?: Observable<string | null | undefined>;

  constructor(private authorizeService: AuthorizationService) {}

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = of(this.authorizeService.getEmail());
  }

  public logoutUser(): void {
    console.log('Logging out!');
    this.authorizeService.logout();
    window.location.reload();
  }
}
