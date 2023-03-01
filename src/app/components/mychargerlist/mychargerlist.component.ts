import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Charger } from '../charger-list/charger-list.component';

@Component({
  selector: 'app-mychargerlist',
  templateUrl: './mychargerlist.component.html',
  styleUrls: ['./mychargerlist.component.css']
})
export class MychargerlistComponent {
  public chargers?: Charger[];

  constructor(public http: HttpClient, public utils: UtilsService, public auth: AuthorizationService) {
    http.get<Charger[]>(`https://chargesharedapitest.azurewebsites.net/api/chargers/email=${auth.getEmail()}`).subscribe(
      (result) => {
        this.chargers = result;
        console.log(result);
      },
      (error) => console.error(error)
    );
  }

  public goToChargerPage(id: number) {
    alert(`test ${id}`);
  }


  public removeCharger(id: number){
    this.http.delete(`https://chargesharedapitest.azurewebsites.net/api/chargers/${id}`).subscribe(
      (result) => {
        console.log(result);
        
      },
      (error) => console.error(error)
    )

    this.chargers?.forEach((item, index) => {
      if(item.id === id) this.chargers?.splice(index,1);
    });
  }
}
